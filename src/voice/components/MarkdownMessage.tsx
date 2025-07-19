import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MarkdownMessageProps {
  content: string;
  style?: any;
}

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ 
  content, 
  style 
}) => {
  return (
    <Markdown 
      style={markdownStyles}
      mergeStyle={true}
    >
      {content}
    </Markdown>
  );
};

const markdownStyles = StyleSheet.create({
  body: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  strong: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  em: {
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  code_inline: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFFFFF',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: 'monospace',
    fontSize: 14,
  },
  fence: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  code_block: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 14,
  },
  link: {
    color: '#3B82F6',
  },
  list_item: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  bullet_list: {
    marginVertical: 4,
  },
  ordered_list: {
    marginVertical: 4,
  },
  heading1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  heading2: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  heading3: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 2,
  },
});