import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MarkdownMessage } from './MarkdownMessage';
import { ChatMessage } from '../VoiceContext';

interface ChatMessageContentProps {
  message: ChatMessage;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ChatMessageContent: React.FC<ChatMessageContentProps> = ({ message }) => {
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const hasImage = !!message.imageUrl;
  const hasText = !!message.content.trim();

  return (
    <View style={styles.container}>
      {/* Image content */}
      {hasImage && (
        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => setImageModalVisible(true)}
          activeOpacity={0.8}
        >
          <Image 
            source={{ uri: message.imageUrl }}
            style={styles.messageImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Ionicons name="expand" size={20} color="white" />
          </View>
        </TouchableOpacity>
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
        onRequestClose={() => setImageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.modalBackground}
            onPress={() => setImageModalVisible(false)}
            activeOpacity={1}
          >
            <View style={styles.modalContent}>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setImageModalVisible(false)}
              >
                <Ionicons name="close" size={30} color="white" />
              </TouchableOpacity>
              
              <Image 
                source={{ uri: message.imageUrl }}
                style={styles.fullScreenImage}
                resizeMode="contain"
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
});