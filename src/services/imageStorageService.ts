import { supabase } from '../supabase/supabase';
import { decode } from 'base64-arraybuffer';

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
    fileName: string = `image_${Date.now()}.jpg`,
    base64Data?: string
  ): Promise<ImageUploadResult> {
    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        return { success: false, error: 'User not authenticated' };
      }

      // Convert image to ArrayBuffer using base64 data or fetch
      let arrayBuffer: ArrayBuffer;
      
      if (base64Data) {
        // Use provided base64 data (recommended for React Native)
        arrayBuffer = decode(base64Data);
      } else {
        // Fallback: fetch the image URI and convert to ArrayBuffer
        const response = await fetch(imageUri);
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }
        arrayBuffer = await response.arrayBuffer();
      }
      
      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        throw new Error('Image data is empty or invalid');
      }

      // Create file path: userId/images/filename
      const filePath = `${userId}/images/${fileName}`;

      // Upload to Supabase Storage using ArrayBuffer
      const { data, error } = await supabase.storage
        .from(ImageStorageService.BUCKET_NAME)
        .upload(filePath, arrayBuffer, {
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