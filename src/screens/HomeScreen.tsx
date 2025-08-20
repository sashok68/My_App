import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import type { Goal } from '../data/goals';
import { useGoals } from '../context/GoalsContext';
import { EmptyState } from '../components/common/EmptyState';
import { GoalItem } from '../components/goals/GoalItem';
import { globalStyles } from '../styles/globalStyles';
import { APP_CONFIG, MESSAGES } from '../constants/config';
import { formatGoalCounter } from '../utils/formatting';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { goals } = useGoals();
  
  const navigateToGoalCreation = () => navigation.navigate('GoalCreation');
  const navigateToGoalDetails = (id: string) => navigation.navigate('GoalDetails', { id });

  const renderItem = ({ item }: { item: Goal }) => (
    <GoalItem 
      goal={item} 
      onPress={() => navigateToGoalDetails(item.id)} 
    />
  );

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <View style={globalStyles.headerRow}>
          <Text style={globalStyles.headerTitle}>
            {MESSAGES.TITLES.GOALS}
          </Text>
          <Button 
            title={MESSAGES.BUTTONS.CREATE} 
            onPress={navigateToGoalCreation} 
          />
        </View>
        <Text style={globalStyles.headerSubtitle}>
          {formatGoalCounter(goals.length, APP_CONFIG.MAX_FREE_GOALS)}
        </Text>
      </View>
      
      {goals.length === 0 ? (
        <EmptyState onCreateGoal={navigateToGoalCreation} />
      ) : (
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}
    </View>
  );
}


