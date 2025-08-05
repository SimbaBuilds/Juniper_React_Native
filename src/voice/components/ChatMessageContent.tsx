import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Dimensions, Platform, Alert, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MarkdownMessage } from './MarkdownMessage';
import { ChatMessage } from '../VoiceContext';

interface ChatMessageContentProps {
  message: ChatMessage;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ChatMessageContent: React.FC<ChatMessageContentProps> = ({ message }) => {
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  const hasImage = !!message.imageUrl;
  const hasText = !!message.content.trim();

  const handleImagePress = () => {
    console.log('🔄 ChatMessageContent: Image pressed', { 
      imageUrl: message.imageUrl,
      platform: Platform.OS 
    });
    
    try {
      if (!message.imageUrl) {
        console.error('❌ ChatMessageContent: No image URL available');
        Alert.alert('Error', 'Image is not available');
        return;
      }
      
      setImageModalVisible(true);
      console.log('✅ ChatMessageContent: Image modal opened');
    } catch (error) {
      console.error('❌ ChatMessageContent: Error opening image modal:', {
        error: error instanceof Error ? error.message : String(error),
        imageUrl: message.imageUrl,
        platform: Platform.OS
      });
      
      Alert.alert('Error', 'Failed to open image. Please try again.');
    }
  };

  const handleImageError = (error: any) => {
    console.error('❌ ChatMessageContent: Image load error:', {
      error,
      imageUrl: message.imageUrl,
      platform: Platform.OS
    });
    
    setImageLoadError(true);
  };

  const handleImageLoad = () => {
    console.log('✅ ChatMessageContent: Image loaded successfully', { 
      imageUrl: message.imageUrl 
    });
    setImageLoadError(false);
  };

  return (
    <View style={styles.container}>
      {/* Image content */}
      {hasImage && !imageLoadError && (
        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={handleImagePress}
          activeOpacity={0.8}
        >
          <Image 
            source={{ uri: message.imageUrl }}
            style={styles.messageImage}
            resizeMode="cover"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          <View style={styles.imageOverlay}>
            <Ionicons name="expand" size={20} color="white" />
          </View>
        </TouchableOpacity>
      )}

      {/* Image error state */}
      {hasImage && imageLoadError && (
        <View style={[styles.imageContainer, styles.imageErrorContainer]}>
          <Ionicons name="image-outline" size={40} color="#666" />
          <Text style={styles.imageErrorText}>Failed to load image</Text>
        </View>
      )}

      {/* Text content */}
      {hasText && (
        <View style={hasImage ? styles.textWithImage : undefined}>
          <MarkdownMessage content={message.content} role={message.role} />
        </View>
      )}

      {/* Full-screen image modal */}
      <Modal
        visible={imageModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          console.log('🔄 ChatMessageContent: Modal close requested');
          setImageModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.modalBackground}
            onPress={() => {
              console.log('🔄 ChatMessageContent: Modal background pressed');
              setImageModalVisible(false);
            }}
            activeOpacity={1}
          >
            <View style={styles.modalContent}>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => {
                  console.log('🔄 ChatMessageContent: Close button pressed');
                  setImageModalVisible(false);
                }}
              >
                <Ionicons name="close" size={30} color="white" />
              </TouchableOpacity>
              
              <Image 
                source={{ uri: message.imageUrl }}
                style={styles.fullScreenImage}
                resizeMode="contain"
                onError={(error) => {
                  console.error('❌ ChatMessageContent: Full screen image load error:', {
                    error,
                    imageUrl: message.imageUrl
                  });
                }}
                onLoad={() => {
                  console.log('✅ ChatMessageContent: Full screen image loaded');
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  messageImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 12,
    padding: 4,
  },
  textWithImage: {
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    position: 'relative',
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  fullScreenImage: {
    width: screenWidth - 40,
    height: screenHeight - 100,
  },
  imageErrorContainer: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageErrorText: {
    marginTop: 8,
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
});