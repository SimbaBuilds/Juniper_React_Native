import React, { useState, useEffect } from 'react';
import { View, Switch, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useWakeWord } from '../WakeWordContext';
import { useVoice } from '../../voice/VoiceContext';
import WakeWordService, { WakeWordEvents } from '../WakeWordService';
import { DEFAULT_WAKE_PHRASE } from '../constants';
import { colors } from '../../shared/theme/colors';

export const WakeWordToggle: React.FC = () => {
    const { isEnabled, setEnabled } = useWakeWord();
    const { voiceSettings } = useVoice();
    const [detectionAnimation] = useState(new Animated.Value(0));
    const [isDetected, setIsDetected] = useState(false);
    const selectedWakeWord = voiceSettings?.selectedWakeWord || DEFAULT_WAKE_PHRASE;

    // Listen for wake word detection events
    useEffect(() => {
        const subscription = WakeWordService.addListener(
            'wakeWordDetected',
            () => {
                // Start the animation
                setIsDetected(true);
                
                // Animate the detection indicator
                Animated.sequence([
                    Animated.timing(detectionAnimation, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                        easing: Easing.bounce,
                    }),
                    Animated.delay(1000),
                    Animated.timing(detectionAnimation, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    })
                ]).start(() => setIsDetected(false));
            }
        );
        
        return () => subscription?.remove();
    }, [detectionAnimation]);

    const handleToggle = async (value: boolean) => {
        try {
            // The WakeWordContext will handle both native sync and database updates
            await setEnabled(value);
        } catch (error) {
            console.error('Error toggling wake word:', error);
        }
    };

    // Animation styles
    const detectionIndicatorStyle = {
        opacity: detectionAnimation,
        transform: [
            {
                scale: detectionAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.2],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Wake Word Detection</Text>
                <Switch
                    value={isEnabled}
                    onValueChange={handleToggle}
                    trackColor={{ false: colors.common.switchTrackFalse, true: colors.status.mutedBlue }}
                    thumbColor={isEnabled ? colors.status.mutedBlue : colors.common.switchThumbInactive}
                />
            </View>
            
            {isEnabled && (
                <View style={styles.statusContainer}>
                    {/* <Text style={styles.statusText}>
                        Listening for {selectedWakeWord}
                    </Text> */}
                    {isDetected && (
                        <Animated.View style={[styles.detectionIndicator, detectionIndicatorStyle]}>
                            <Text style={styles.detectionText}>Wake Word Detected!</Text>
                        </Animated.View>
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.background.card,
        borderRadius: 8,
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusContainer: {
        marginTop: 8,
        alignItems: 'center',
    },
    statusText: {
        fontSize: 14,
        color: colors.text.secondary,
    },
    detectionIndicator: {
        backgroundColor: colors.status.mutedBlue,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginTop: 8,
    },
    detectionText: {
        color: colors.text.primary,
        fontWeight: 'bold',
    },
}); 