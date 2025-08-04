import { supabase } from '../supabase/supabase';

export interface ImageUploadResult {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export class ImageStorageService {
  private static readonly BUCKET_NAME = 'chat-images';

  /**
   * Upload an image to Supabase Storage for chat messages
   */
  static async uploadChatImage(
    userId: string,
    imageUri: string,
    fileName: string = `image_${Date.now()}.jpg`
  ): Promise<ImageUploadResult> {
    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        return { success: false, error: 'User not authenticated' };
      }

      // Convert image URI to blob
      const response = await fetch(imageUri);
      const blob = await response.blob();

      // Create file path: userId/images/filename
      const filePath = `${userId}/images/${fileName}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(ImageStorageService.BUCKET_NAME)
        .upload(filePath, blob, {
          contentType: 'image/jpeg',
          upsert: false
        });

      if (error) {
        console.error('❌ Error uploading image:', error);
        return { success: false, error: error.message };
      }

      // Get public URL
      const imageUrl = ImageStorageService.getPublicUrl(filePath);
      
      return { 
        success: true, 
        imageUrl 
      };

    } catch (error) {
      console.error('❌ Error uploading chat image:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  /**
   * Get public URL for an image
   */
  static getPublicUrl(filePath: string): string {
    const { data } = supabase.storage
      .from(ImageStorageService.BUCKET_NAME)
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  }

  /**
   * Delete an image from storage
   */
  static async deleteImage(filePath: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase.storage
        .from(ImageStorageService.BUCKET_NAME)
        .remove([filePath]);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };

    } catch (error) {
      console.error('❌ Error deleting image:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}