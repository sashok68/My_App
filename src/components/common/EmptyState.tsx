import React from 'react';
import { View, Text, Button } from 'react-native';
import { MESSAGES } from '../../constants/config';
import { globalStyles } from '../../styles/globalStyles';

interface EmptyStateProps {
  onCreateGoal: () => void;
}

export function EmptyState({ onCreateGoal }: EmptyStateProps) {
  return (
    <View style={globalStyles.emptyState}>
      <Text style={globalStyles.emptyStateTitle}>
        {MESSAGES.EMPTY_STATE.NO_GOALS_TITLE}
      </Text>
      <Text style={globalStyles.emptyStateSubtitle}>
        {MESSAGES.EMPTY_STATE.NO_GOALS_SUBTITLE}
      </Text>
      <Button 
        title={MESSAGES.BUTTONS.CREATE_FIRST_GOAL} 
        onPress={onCreateGoal} 
      />
    </View>
  );
}
