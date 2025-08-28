import { supabase } from '../supabase/supabase';
import { decode } from 'base64-arraybuffer';
import { Platform } from 'react-native';

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
    console.log('🔄 ImageStorageService: Starting image upload', {
      userId,
      fileName,
      hasBase64Data: !!base64Data,
      imageUriLength: imageUri?.length || 0,
      platform: Platform.OS
    });

    try {
      // Validate inputs
      if (!userId) {
        const error = 'User ID is required for image upload';
        console.error('❌ ImageStorageService:', error);
        return { success: false, error };
      }

      if (!imageUri) {
        const error = 'Image URI is required for upload';
        console.error('❌ ImageStorageService:', error);
        return { success: false, error };
      }

      // Check if user is authenticated
      console.log('🔄 ImageStorageService: Checking user authentication');
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError) {
        console.error('❌ ImageStorageService: Auth error:', authError);
        return { success: false, error: `Authentication error: ${authError.message}` };
      }

      if (!user) {
        console.error('❌ ImageStorageService: User not authenticated');
        return { success: false, error: 'User not authenticated' };
      }

      console.log('✅ ImageStorageService: User authenticated', { userId: user.id });

      // Convert image to ArrayBuffer using base64 data or fetch
      let arrayBuffer: ArrayBuffer;
      
      try {
        if (base64Data) {
          console.log('🔄 ImageStorageService: Using base64 data', { 
            base64Length: base64Data.length 
          });
          
          // Validate base64 data
          if (base64Data.length === 0) {
            throw new Error('Base64 data is empty');
          }

          // Use provided base64 data (recommended for React Native)
          arrayBuffer = decode(base64Data);
          console.log('✅ ImageStorageService: Base64 decoded successfully', {
            arrayBufferSize: arrayBuffer.byteLength
          });
        } else {
          console.log('🔄 ImageStorageService: Fetching image from URI', { imageUri });
          
          // Fallback: fetch the image URI and convert to ArrayBuffer
          const response = await fetch(imageUri);
          
          console.log('🔄 ImageStorageService: Fetch response', {
            status: response.status,
            statusText: response.statusText,
            contentType: response.headers.get('content-type'),
            contentLength: response.headers.get('content-length')
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
          }
          
          arrayBuffer = await response.arrayBuffer();
          console.log('✅ ImageStorageService: Image fetched and converted', {
            arrayBufferSize: arrayBuffer.byteLength
          });
        }
      } catch (conversionError) {
        console.error('❌ ImageStorageService: Image conversion failed:', conversionError);
        return { 
          success: false, 
          error: `Failed to process image data: ${conversionError instanceof Error ? conversionError.message : 'Unknown conversion error'}` 
        };
      }
      
      // Validate array buffer
      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        const error = 'Image data is empty or invalid after processing';
        console.error('❌ ImageStorageService:', error, {
          hasArrayBuffer: !!arrayBuffer,
          byteLength: arrayBuffer?.byteLength || 0
        });
        return { success: false, error };
      }

      // Create file path: userId/images/filename
      const filePath = `${userId}/images/${fileName}`;
      console.log('🔄 ImageStorageService: Uploading to path', { filePath });

      // Upload to Supabase Storage using ArrayBuffer
      const { data, error } = await supabase.storage
        .from(ImageStorageService.BUCKET_NAME)
        .upload(filePath, arrayBuffer, {
          contentType: 'image/jpeg',
          upsert: false
        });

      if (error) {
        console.error('❌ ImageStorageService: Supabase upload error:', {
          error: error.message,
          statusCode: (error as any).statusCode || 'unknown',
          name: error.name
        });
        return { success: false, error: error.message };
      }

      console.log('✅ ImageStorageService: Upload successful', { data });

      // Get public URL
      const imageUrl = ImageStorageService.getPublicUrl(filePath);
      console.log('✅ ImageStorageService: Public URL generated', { imageUrl });
      
      return { 
        success: true, 
        imageUrl 
      };

    } catch (error) {
      console.error('❌ ImageStorageService: Unexpected error during upload:', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        platform: Platform.OS
      });
      
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error during image upload' 
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