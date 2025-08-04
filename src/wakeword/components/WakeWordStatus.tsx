import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useWakeWord } from '../WakeWordContext';
import { useVoice } from '../../voice/VoiceContext';
import { DEFAULT_WAKE_PHRASE } from '../constants';
import { colors } from '../../shared/theme/colors';

export const WakeWordStatus: React.FC = () => {
    const { isEnabled, isRunning } = useWakeWord();
    const { voiceSettings } = useVoice();
    const selectedWakeWord = voiceSettings?.selectedWakeWord || DEFAULT_WAKE_PHRASE;

    const getStatusColor = () => {
        if (!isEnabled) return colors.status.disabled;
        return isRunning ? colors.status.mutedGreen : colors.status.warning;
    };

    const getStatusText = () => {
        if (!isEnabled) return 'Wake Word Disabled';
        return isRunning ? `Listening for "${selectedWakeWord}"` : '';
    };

    return (
        <View style={styles.container}>
            <View style={[styles.indicator, { backgroundColor: getStatusColor() }]} />
            <Text style={styles.text}>{getStatusText()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.background.dark,
        borderRadius: 8,
    },
    indicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 8,
    },
    text: {
        color: colors.text.primary,
        fontSize: 14,
    },
}); 