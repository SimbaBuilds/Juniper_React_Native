import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { colors } from '../../shared/theme/colors';

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
    color: colors.text.primary,
    fontSize: 16,
  },
  text: {
    color: colors.text.primary,
    fontSize: 16,
  },
  strong: {
    color: colors.text.primary,
    fontWeight: 'bold',
  },
  em: {
    color: colors.text.primary,
    fontStyle: 'italic',
  },
  code_inline: {
    backgroundColor: 'rgba(245, 245, 220, 0.1)',
    color: colors.text.primary,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: 'monospace',
    fontSize: 14,
  },
  fence: {
    backgroundColor: 'rgba(245, 245, 220, 0.1)',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  code_block: {
    backgroundColor: 'rgba(245, 245, 220, 0.1)',
    color: colors.text.primary,
    fontFamily: 'monospace',
    fontSize: 14,
  },
  link: {
    color: '#3B82F6',
  },
  list_item: {
    color: colors.text.primary,
    fontSize: 16,
  },
  bullet_list: {
    marginVertical: 4,
  },
  ordered_list: {
    marginVertical: 4,
  },
  heading1: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  heading2: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
  },
  heading3: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  paragraph: {
    color: colors.text.primary,
    fontSize: 16,
    marginVertical: 2,
  },
});