import { Alert } from 'react-native';
import { MESSAGES } from '../constants/config';

export function showGoalLimitAlert(onDismiss?: () => void): void {
  Alert.alert(
    'Лимит достигнут',
    MESSAGES.ERRORS.GOAL_LIMIT,
    [{ text: MESSAGES.BUTTONS.UNDERSTAND, onPress: onDismiss }]
  );
}

export function showValidationAlert(): void {
  Alert.alert(
    'Проверьте данные',
    MESSAGES.ERRORS.VALIDATION
  );
}
