import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard, Image, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { isCancellationError } from '../../utils/cancellationUtils';
import { colors } from '../../shared/theme/colors';
import { ImageStorageService } from '../../services/imageStorageService';

interface TextChatInputProps {
  onSendMessage: (text: string, imageUrl?: string) => Promise<void>;
  disabled?: boolean;
  placeholder?: string;
  userId: string;
}

export const TextChatInput: React.FC<TextChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = "Type a message...",
  userId
}) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageBase64, setSelectedImageBase64] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleSend = async () => {
    const trimmedMessage = message.trim();
    console.log('🔄 TextChatInput: handleSend called', {
      hasMessage: !!trimmedMessage,
      hasImage: !!selectedImage,
      isSending,
      platform: Platform.OS
    });

    if ((!trimmedMessage && !selectedImage) || isSending) {
      console.log('❌ TextChatInput: Send conditions not met');
      return;
    }

    setIsSending(true);
    let imageUrl: string | undefined = undefined;

    try {
      // Upload image if selected
      if (selectedImage) {
        console.log('🔄 TextChatInput: Starting image upload', {
          imageUri: selectedImage,
          hasBase64: !!selectedImageBase64,
          base64Length: selectedImageBase64?.length || 0
        });

        setIsUploadingImage(true);

        try {
          const uploadResult = await ImageStorageService.uploadChatImage(
            userId,
            selectedImage,
            `chat_image_${Date.now()}.jpg`,
            selectedImageBase64 || undefined
          );
          
          console.log('🔄 TextChatInput: Upload result', uploadResult);
          
          if (!uploadResult.success) {
            const errorMessage = uploadResult.error || 'Failed to upload image';
            console.error('❌ TextChatInput: Image upload failed:', errorMessage);
            throw new Error(errorMessage);
          }
          
          imageUrl = uploadResult.imageUrl;
          console.log('✅ TextChatInput: Image uploaded successfully', { imageUrl });
        } catch (uploadError) {
          console.error('❌ TextChatInput: Image upload error:', uploadError);
          setIsUploadingImage(false);
          
          // Show specific error message for upload failures
          const errorMessage = uploadError instanceof Error ? uploadError.message : 'Unknown upload error';
          Alert.alert(
            'Image Upload Failed', 
            `Failed to upload image: ${errorMessage}. You can try sending the message without the image.`,
            [
              { text: 'Remove Image & Send', onPress: () => {
                setSelectedImage(null);
                setSelectedImageBase64(null);
                // Retry sending without image
                if (trimmedMessage) {
                  handleSendWithoutImage(trimmedMessage);
                }
              }},
              { text: 'Cancel', style: 'cancel' }
            ]
          );
          return;
        }
      }

      console.log('🔄 TextChatInput: Sending message', { 
        messageLength: trimmedMessage.length,
        hasImageUrl: !!imageUrl 
      });

      await onSendMessage(trimmedMessage || '', imageUrl);
      
      console.log('✅ TextChatInput: Message sent successfully');
      setMessage(''); // Clear input after successful send
      setSelectedImage(null); // Clear selected image
      setSelectedImageBase64(null); // Clear base64 data
      Keyboard.dismiss(); // Dismiss keyboard after sending
      
    } catch (error) {
      console.error('❌ TextChatInput: Error sending message:', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        platform: Platform.OS
      });
      
      // Don't show alert for cancellation errors
      if (!isCancellationError(error)) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        Alert.alert('Error', `Failed to send message: ${errorMessage}. Please try again.`);
      } else {
        console.log('✅ TextChatInput: Message was cancelled - not showing error alert');
      }
    } finally {
      setIsSending(false);
      setIsUploadingImage(false);
    }
  };

  const handleSendWithoutImage = async (messageText: string) => {
    console.log('🔄 TextChatInput: Sending message without image', { messageText });
    try {
      await onSendMessage(messageText);
      setMessage('');
      Keyboard.dismiss();
      console.log('✅ TextChatInput: Message sent without image');
    } catch (error) {
      console.error('❌ TextChatInput: Error sending message without image:', error);
      if (!isCancellationError(error)) {
        Alert.alert('Error', 'Failed to send message. Please try again.');
      }
    }
  };

  const handleImagePicker = async () => {
    console.log('🔄 TextChatInput: handleImagePicker called', { platform: Platform.OS });
    
    try {
      // Request permission
      console.log('🔄 TextChatInput: Requesting media library permissions');
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      console.log('🔄 TextChatInput: Permission status', { status });
      
      if (status !== 'granted') {
        console.error('❌ TextChatInput: Media library permission denied');
        Alert.alert(
          'Permission Required', 
          'Sorry, we need camera roll permissions to select images. Please enable permissions in your device settings.',
          [
            { text: 'OK', style: 'default' }
          ]
        );
        return;
      }

      console.log('✅ TextChatInput: Media library permission granted');
      
      // Directly open gallery
      await openGallery();
    } catch (error) {
      console.error('❌ TextChatInput: Error with image picker:', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        platform: Platform.OS
      });
      
      Alert.alert(
        'Error', 
        `Failed to open image picker: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`
      );
    }
  };


  const openGallery = async () => {
    console.log('🔄 TextChatInput: Opening gallery');
    
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true, // Get base64 data for React Native compatibility
      });

      console.log('🔄 TextChatInput: Gallery result', {
        canceled: result.canceled,
        assetsCount: result.assets?.length || 0,
        hasFirstAsset: !!(result.assets && result.assets[0])
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        const asset = result.assets[0];
        
        console.log('🔄 TextChatInput: Selected image asset', {
          uri: asset.uri,
          width: asset.width,
          height: asset.height,
          type: asset.type,
          fileSize: asset.fileSize,
          hasBase64: !!asset.base64,
          base64Length: asset.base64?.length || 0,
          platform: Platform.OS
        });

        // Validate the selected image
        if (!asset.uri) {
          console.error('❌ TextChatInput: Selected image has no URI');
          Alert.alert('Error', 'Selected image is invalid. Please try selecting another image.');
          return;
        }

        // Check if base64 data is available (important for upload)
        if (!asset.base64) {
          console.warn('⚠️ TextChatInput: Selected image has no base64 data, will use URI fallback');
        }

        setSelectedImage(asset.uri);
        setSelectedImageBase64(asset.base64 || null);
        
        console.log('✅ TextChatInput: Image selected successfully');
      } else {
        console.log('✅ TextChatInput: User cancelled image selection');
      }
    } catch (error) {
      console.error('❌ TextChatInput: Error opening gallery:', {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        platform: Platform.OS
      });
      
      Alert.alert(
        'Error', 
        `Failed to open gallery: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`
      );
    }
  };

  const removeImage = () => {
    console.log('🔄 TextChatInput: Removing selected image');
    setSelectedImage(null);
    setSelectedImageBase64(null);
    console.log('✅ TextChatInput: Image removed');
  };

  const isDisabled = disabled || isSending || (!message.trim() && !selectedImage);

  return (
    <View style={styles.container}>
      {selectedImage && (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
          <TouchableOpacity style={styles.removeImageButton} onPress={removeImage}>
            <Ionicons name="close-circle" size={24} color="#ff4444" />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.inputRow}>
        <TouchableOpacity
          style={styles.attachButton}
          onPress={handleImagePicker}
          disabled={disabled || isSending}
          activeOpacity={0.7}
        >
          <Ionicons 
            name="add" 
            size={24} 
            color={disabled || isSending ? "#666666" : colors.text.primary} 
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder={placeholder}
          placeholderTextColor="#888888"
          maxLength={2000}
          editable={!disabled && !isSending}
          onSubmitEditing={handleSend}
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
        />
        <TouchableOpacity
          style={[styles.sendButton, isDisabled && styles.sendButtonDisabled]}
          onPress={handleSend}
          disabled={isDisabled}
          activeOpacity={0.7}
        >
          {isUploadingImage ? (
            <Text style={styles.uploadingText}>↑</Text>
          ) : (
            <Ionicons 
              name="send" 
              size={20} 
              color={isDisabled ? "#666666" : colors.text.primary} 
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: 'transparent',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  attachButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    color: colors.text.primary,
    backgroundColor: '#404040',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#2a2a2a',
  },
  imagePreviewContainer: {
    position: 'relative',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#404040',
  },
  removeImageButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'transparent',
  },
  uploadingText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 