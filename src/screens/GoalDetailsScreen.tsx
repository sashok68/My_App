import React, { useMemo } from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useGoals } from '../context/GoalsContext';
import { globalStyles } from '../styles/globalStyles';
import { MESSAGES, APP_CONFIG } from '../constants/config';
import { formatProgress } from '../utils/formatting';
import { Spacing } from '../components/common/Spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'GoalDetails'>;

export default function GoalDetailsScreen({ navigation, route }: Props) {
  const { getGoalById, updateProgress } = useGoals();
  const goalId = route.params?.id ?? '';
  const goal = useMemo(() => (goalId ? getGoalById(goalId) : undefined), [goalId, getGoalById]);

  if (!goal) {
    return (
      <View style={[globalStyles.centered, globalStyles.padding]}>
        <Text style={globalStyles.emptyStateTitle}>
          {MESSAGES.ERRORS.GOAL_NOT_FOUND}
        </Text>
        <Spacing height={12} />
        <Button title={MESSAGES.BUTTONS.BACK} onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const handleProgressDecrease = () => {
    updateProgress(goal.id, (goal.progress || 0) - APP_CONFIG.PROGRESS_STEP);
  };

  const handleProgressIncrease = () => {
    updateProgress(goal.id, (goal.progress || 0) + APP_CONFIG.PROGRESS_STEP);
  };

  const navigateHome = () => navigation.navigate('Home');
  const navigateBack = () => navigation.goBack();

  return (
    <View style={globalStyles.goalDetailsContainer}>
      <Text style={globalStyles.goalDetailsTitle}>{goal.title}</Text>
      
      {goal.description ? (
        <Text style={globalStyles.goalDetailsDescription}>{goal.description}</Text>
      ) : null}
      
      <Text style={globalStyles.goalDetailsMeta}>
        Статус: {goal.status}
      </Text>

      <View style={globalStyles.goalDetailsProgress}>
        <Text style={globalStyles.goalDetailsProgressLabel}>
          Прогресс: {formatProgress(goal.progress)}
        </Text>
      </View>

      <Spacing height={40} />

      <View style={globalStyles.goalDetailsActions}>
        <Button title={MESSAGES.BUTTONS.PROGRESS_MINUS} onPress={handleProgressDecrease} />
        <Spacing height={8} />
        <Button title={MESSAGES.BUTTONS.PROGRESS_PLUS} onPress={handleProgressIncrease} />
      </View>

      <View style={globalStyles.goalDetailsNavigation}>
        <Button title={MESSAGES.BUTTONS.HOME} onPress={navigateHome} />
        <Spacing height={8} />
        <Button title={MESSAGES.BUTTONS.BACK} onPress={navigateBack} />
      </View>
    </View>
  );
}


