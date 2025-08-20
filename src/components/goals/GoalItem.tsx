import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { Goal } from '../../data/goals';
import { globalStyles } from '../../styles/globalStyles';
import { formatProgress } from '../../utils/formatting';

interface GoalItemProps {
  goal: Goal;
  onPress: () => void;
}

export function GoalItem({ goal, onPress }: GoalItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.goalItem}>
      <Text style={globalStyles.goalTitle}>{goal.title}</Text>
      {goal.description ? (
        <Text style={globalStyles.goalDescription}>{goal.description}</Text>
      ) : null}
      <Text style={globalStyles.goalMeta}>
        Статус: {goal.status} · Прогресс: {formatProgress(goal.progress)}
      </Text>
    </TouchableOpacity>
  );
}
