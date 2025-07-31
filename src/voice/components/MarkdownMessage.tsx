import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { colors } from '../../shared/theme/colors';

interface MarkdownMessageProps {
  content: string;
  style?: any;
  role?: 'user' | 'assistant';
}

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ 
  content, 
  style,
  role = 'user'
}) => {
  const textColor = role === 'assistant' ? '#333333' : colors.text.primary;
  
  const dynamicStyles = StyleSheet.create({
    body: {
      color: textColor,
      fontSize: 16,
    },
    text: {
      color: textColor,
      fontSize: 16,
    },
    strong: {
      color: textColor,
      fontWeight: 'bold',
    },
    em: {
      color: textColor,
      fontStyle: 'italic',
    },
    code_inline: {
      backgroundColor: role === 'assistant' ? 'rgba(51, 51, 51, 0.1)' : 'rgba(245, 245, 220, 0.1)',
      color: textColor,
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
      fontFamily: 'monospace',
      fontSize: 14,
    },
    fence: {
      backgroundColor: role === 'assistant' ? 'rgba(51, 51, 51, 0.1)' : 'rgba(245, 245, 220, 0.1)',
      borderRadius: 8,
      padding: 12,
      marginVertical: 8,
    },
    code_block: {
      backgroundColor: role === 'assistant' ? 'rgba(51, 51, 51, 0.1)' : 'rgba(245, 245, 220, 0.1)',
      color: textColor,
      fontFamily: 'monospace',
      fontSize: 14,
    },
    link: {
      color: '#3B82F6',
    },
    list_item: {
      color: textColor,
      fontSize: 16,
    },
    bullet_list: {
      marginVertical: 4,
    },
    ordered_list: {
      marginVertical: 4,
    },
    heading1: {
      color: textColor,
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    heading2: {
      color: textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 6,
    },
    heading3: {
      color: textColor,
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 4,
    },
    paragraph: {
      color: textColor,
      fontSize: 16,
      marginVertical: 2,
    },
  });
  
  return (
    <Markdown 
      style={dynamicStyles}
      mergeStyle={true}
    >
      {content}
    </Markdown>
  );
};

// Static styles removed as they are now dynamic based on role