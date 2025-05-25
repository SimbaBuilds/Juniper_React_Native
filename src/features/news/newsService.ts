import { supabase } from '../../supabase/supabase';
import { NewsCategory, NewsSource } from '../features';

export interface NewsSourceInput {
  name: string;
  affiliation?: string;
  medium?: string;
}

export interface NewsCategoryInput {
  name: string;
  sources: NewsSourceInput[];
}

export const newsService = {
  /**
   * Get all news categories and their sources for the current user
   */
  getUserNewsCategories: async (): Promise<NewsCategory[]> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    // Get categories
    const { data: categoriesData, error: categoriesError } = await supabase
      .from('news_categories')
      .select('*')
      .eq('user_id', user.user.id)
      .order('name');

    if (categoriesError) throw categoriesError;

    // Get sources for all categories
    const { data: sourcesData, error: sourcesError } = await supabase
      .from('news_sources')
      .select('*')
      .eq('user_id', user.user.id)
      .order('name');

    if (sourcesError) throw sourcesError;

    // Group sources by category
    const categories: NewsCategory[] = (categoriesData || []).map(cat => ({
      id: cat.id,
      name: cat.name,
      sources: (sourcesData || [])
        .filter(source => source.category_id === cat.id)
        .map(source => ({
          id: source.id,
          name: source.name,
          affiliation: source.affiliation,
          medium: source.medium,
        }))
    }));

    return categories;
  },

  /**
   * Add a new category
   */
  addCategory: async (categoryName: string): Promise<string> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('news_categories')
      .insert({
        user_id: user.user.id,
        name: categoryName,
        created_at: new Date().toISOString(),
      })
      .select('id')
      .single();

    if (error) throw error;
    return data.id;
  },

  /**
   * Remove a category and all its sources
   */
  removeCategory: async (categoryId: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    // Delete sources first (due to foreign key constraint)
    await supabase
      .from('news_sources')
      .delete()
      .eq('category_id', categoryId)
      .eq('user_id', user.user.id);

    // Delete category
    const { error } = await supabase
      .from('news_categories')
      .delete()
      .eq('id', categoryId)
      .eq('user_id', user.user.id);

    if (error) throw error;
  },

  /**
   * Add a source to a category
   */
  addSource: async (categoryId: string, source: NewsSourceInput): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('news_sources')
      .insert({
        user_id: user.user.id,
        category_id: categoryId,
        name: source.name,
        affiliation: source.affiliation,
        medium: source.medium,
        created_at: new Date().toISOString(),
      });

    if (error) throw error;
  },

  /**
   * Remove a source
   */
  removeSource: async (sourceId: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('news_sources')
      .delete()
      .eq('id', sourceId)
      .eq('user_id', user.user.id);

    if (error) throw error;
  },

  /**
   * Update a source
   */
  updateSource: async (sourceId: string, updates: Partial<NewsSourceInput>): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('news_sources')
      .update(updates)
      .eq('id', sourceId)
      .eq('user_id', user.user.id);

    if (error) throw error;
  },

  /**
   * Sync local categories with database
   */
  syncNewsCategories: async (localCategories: NewsCategory[]): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    // Get current database categories
    const dbCategories = await newsService.getUserNewsCategories();
    
    // Handle category sync logic here
    // For simplicity, we'll replace all categories and sources
    // In a production app, you might want more sophisticated merging logic
    
    // Remove categories that don't exist locally
    for (const dbCategory of dbCategories) {
      const existsLocally = localCategories.find(local => local.name === dbCategory.name);
      if (!existsLocally) {
        await newsService.removeCategory(dbCategory.id);
      }
    }

    // Add or update categories and sources
    for (const localCategory of localCategories) {
      const dbCategory = dbCategories.find(db => db.name === localCategory.name);
      
      let categoryId: string;
      if (dbCategory) {
        categoryId = dbCategory.id;
      } else {
        categoryId = await newsService.addCategory(localCategory.name);
      }

      // Sync sources within this category
      const dbSources = dbCategory?.sources || [];
      
      // Remove sources that don't exist locally
      for (const dbSource of dbSources) {
        const existsLocally = localCategory.sources.find(local => local.name === dbSource.name);
        if (!existsLocally) {
          await newsService.removeSource(dbSource.id);
        }
      }

      // Add new sources
      for (const localSource of localCategory.sources) {
        const dbSource = dbSources.find(db => db.name === localSource.name);
        if (!dbSource) {
          await newsService.addSource(categoryId, localSource);
        } else if (
          dbSource.affiliation !== localSource.affiliation ||
          dbSource.medium !== localSource.medium
        ) {
          await newsService.updateSource(dbSource.id, {
            affiliation: localSource.affiliation,
            medium: localSource.medium
          });
        }
      }
    }
  },

  /**
   * Initialize user news categories from database
   */
  initializeUserNewsCategories: async (): Promise<NewsCategory[]> => {
    try {
      return await newsService.getUserNewsCategories();
    } catch (error) {
      console.error('Error initializing user news categories:', error);
      return []; // Return empty if there's an error
    }
  },
}; 