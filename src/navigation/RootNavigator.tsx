import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import GoalCreationScreen from '../screens/GoalCreationScreen';
import GoalDetailsScreen from '../screens/GoalDetailsScreen';
import { MESSAGES } from '../constants/config';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  GoalCreation: undefined;
  GoalDetails: { id: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: MESSAGES.TITLES.GOALS }} />
      <Stack.Screen name="GoalCreation" component={GoalCreationScreen} options={{ title: MESSAGES.TITLES.GOAL_CREATION }} />
      <Stack.Screen name="GoalDetails" component={GoalDetailsScreen} options={{ title: MESSAGES.TITLES.GOAL_DETAILS }} />
    </Stack.Navigator>
  );
}


