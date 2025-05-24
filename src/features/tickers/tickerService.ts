import { supabase } from '../../supabase/supabase';
import { Ticker } from '../../supabase/tables';

export interface TickerInput {
  symbol: string;
  quantity?: number;
  averageCost?: number;
}

export const tickerService = {
  /**
   * Get all tickers for the current user
   */
  getUserTickers: async (): Promise<string[]> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('tickers')
      .select('symbol')
      .eq('user_id', user.user.id)
      .order('symbol');

    if (error) throw error;
    
    return data?.map(ticker => ticker.symbol) || [];
  },

  /**
   * Add a ticker for the current user
   */
  addTicker: async (symbol: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    // Check if ticker already exists
    const { data: existingTicker } = await supabase
      .from('tickers')
      .select('id')
      .eq('user_id', user.user.id)
      .eq('symbol', symbol.toUpperCase())
      .single();

    if (existingTicker) {
      // Ticker already exists, don't add duplicate
      return;
    }

    const { error } = await supabase
      .from('tickers')
      .insert({
        user_id: user.user.id,
        symbol: symbol.toUpperCase(),
        last_updated: new Date().toISOString(),
      });

    if (error) throw error;
  },

  /**
   * Remove a ticker for the current user
   */
  removeTicker: async (symbol: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('tickers')
      .delete()
      .eq('user_id', user.user.id)
      .eq('symbol', symbol.toUpperCase());

    if (error) throw error;
  },

  /**
   * Sync local ticker list with database
   */
  syncTickers: async (localTickers: string[]): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    // Get current database tickers
    const dbTickers = await tickerService.getUserTickers();
    
    // Find tickers to add (in local but not in db)
    const tickersToAdd = localTickers.filter(ticker => !dbTickers.includes(ticker.toUpperCase()));
    
    // Find tickers to remove (in db but not in local)
    const tickersToRemove = dbTickers.filter(ticker => !localTickers.map(t => t.toUpperCase()).includes(ticker));

    // Add new tickers
    for (const ticker of tickersToAdd) {
      await tickerService.addTicker(ticker);
    }

    // Remove old tickers
    for (const ticker of tickersToRemove) {
      await tickerService.removeTicker(ticker);
    }
  },

  /**
   * Initialize user tickers from database
   */
  initializeUserTickers: async (): Promise<string[]> => {
    try {
      return await tickerService.getUserTickers();
    } catch (error) {
      console.error('Error initializing user tickers:', error);
      return ['SPX']; // Return default if there's an error
    }
  },
}; 