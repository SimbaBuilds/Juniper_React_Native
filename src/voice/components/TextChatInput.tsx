import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard, Image, Text } from 'react-native';
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
    if ((!trimmedMessage && !selectedImage) || isSending) {
      return;
    }

    setIsSending(true);
    let imageUrl: string | undefined = undefined;

    try {
      // Upload image if selected
      if (selectedImage) {
        setIsUploadingImage(true);
        const uploadResult = await ImageStorageService.uploadChatImage(
          userId,
          selectedImage,
          `chat_image_${Date.now()}.jpg`,
          selectedImageBase64 || undefined
        );
        
        if (!uploadResult.success) {
          throw new Error(uploadResult.error || 'Failed to upload image');
        }
        
        imageUrl = uploadResult.imageUrl;
      }

      await onSendMessage(trimmedMessage || '', imageUrl);
      setMessage(''); // Clear input after successful send
      setSelectedImage(null); // Clear selected image
      setSelectedImageBase64(null); // Clear base64 data
      Keyboard.dismiss(); // Dismiss keyboard after sending
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Don't show alert for cancellation errors
      if (!isCancellationError(error)) {
        Alert.alert('Error', 'Failed to send message. Please try again.');
      } else {
        console.log('Message was cancelled - not showing error alert');
      }
    } finally {
      setIsSending(false);
      setIsUploadingImage(false);
    }
  };

  const handleImagePicker = async () => {
    try {
      // Request permission
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to select images.');
        return;
      }

      // Directly open gallery
      openGallery();
    } catch (error) {
      console.error('Error with image picker:', error);
      Alert.alert('Error', 'Failed to open image picker');
    }
  };


  const openGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
        base64: true, // Get base64 data for React Native compatibility
      });

      if (!result.canceled && result.assets[0]) {
        setSelectedImage(result.assets[0].uri);
        setSelectedImageBase64(result.assets[0].base64 || null);
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
      Alert.alert('Error', 'Failed to open gallery');
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setSelectedImageBase64(null);
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
          maxLength={1000}
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