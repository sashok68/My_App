import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { globalStyles } from '../styles/globalStyles';
import { MESSAGES } from '../constants/config';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  const handleStart = () => navigation.replace('Home');

  return (
    <View style={globalStyles.onboarding}>
      <Text style={globalStyles.onboardingEmoji}>📋</Text>
      <Text style={globalStyles.onboardingTitle}>
        {MESSAGES.TITLES.GOAL_TRACKER}
      </Text>
      <Text style={globalStyles.onboardingSubtitle}>
        Отслеживайте прогресс ваших целей
      </Text>
      <Text style={globalStyles.onboardingCaption}>
        Бесплатно до 2 целей
      </Text>
      <Button title={MESSAGES.BUTTONS.START} onPress={handleStart} />
    </View>
  );
}


