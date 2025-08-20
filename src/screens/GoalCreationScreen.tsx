import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { useGoals } from '../context/GoalsContext';
import { globalStyles } from '../styles/globalStyles';
import { MESSAGES, PLACEHOLDERS } from '../constants/config';
import { showGoalLimitAlert, showValidationAlert } from '../utils/alerts';
import { Spacing } from '../components/common/Spacing';

type Props = NativeStackScreenProps<RootStackParamList, 'GoalCreation'>;

export default function GoalCreationScreen({ navigation }: Props) {
  const { addGoal } = useGoals();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSave = () => {
    const result = addGoal({ title, description: description || undefined });
    if (result.ok) {
      navigation.navigate('GoalDetails', { id: result.data.id });
    } else if (result.error === 'limit') {
      showGoalLimitAlert(() => navigation.goBack());
    } else {
      showValidationAlert();
    }
  };

  return (
    <View style={globalStyles.goalDetailsContainer}>
      <Text style={globalStyles.headerTitle}>
        {MESSAGES.TITLES.GOAL_CREATION}
      </Text>
      <Spacing height={16} />
      
      <Text style={globalStyles.inputLabel}>Название</Text>
      <TextInput
        placeholder={PLACEHOLDERS.GOAL_TITLE}
        value={title}
        onChangeText={setTitle}
        style={globalStyles.textInput}
      />
      
      <Text style={globalStyles.inputLabel}>Описание (необязательно)</Text>
      <TextInput
        placeholder={PLACEHOLDERS.GOAL_DESCRIPTION}
        value={description}
        onChangeText={setDescription}
        multiline
        style={[globalStyles.textInput, globalStyles.textInputMultiline]}
      />
      
      <Spacing height={20} />
      <Button title={MESSAGES.BUTTONS.SAVE} onPress={onSave} />
    </View>
  );
}


