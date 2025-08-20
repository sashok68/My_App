import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007AFF',
  secondary: '#666',
  tertiary: '#999',
  background: '#f8f9fa',
  border: '#eee',
  text: {
    primary: '#333',
    secondary: '#666',
    tertiary: '#999',
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const typography = {
  title: {
    fontSize: 24,
    fontWeight: '700' as const,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
} as const;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    padding: spacing.lg,
  },
  paddingHorizontal: {
    paddingHorizontal: spacing.lg,
  },
  
  // Headers
  header: {
    padding: spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  headerTitle: {
    ...typography.title,
    color: colors.text.primary,
  },
  headerSubtitle: {
    ...typography.small,
    color: colors.text.secondary,
  },

  // Goal items
  goalItem: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  goalTitle: {
    ...typography.body,
    fontWeight: '600',
    color: colors.text.primary,
  },
  goalDescription: {
    ...typography.caption,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
  goalMeta: {
    ...typography.small,
    color: colors.text.tertiary,
    marginTop: spacing.xs,
  },

  // Forms
  inputLabel: {
    ...typography.caption,
    marginBottom: spacing.sm,
    color: colors.text.primary,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    marginBottom: spacing.md,
    ...typography.body,
  },
  textInputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },

  // Empty state
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  emptyStateTitle: {
    ...typography.subtitle,
    textAlign: 'center',
    color: colors.text.secondary,
    marginBottom: spacing.lg,
  },
  emptyStateSubtitle: {
    textAlign: 'center',
    color: colors.text.tertiary,
    marginBottom: spacing.xl,
    ...typography.caption,
  },

  // Onboarding
  onboarding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
    backgroundColor: colors.background,
  },
  onboardingEmoji: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: spacing.lg,
    color: colors.text.primary,
  },
  onboardingTitle: {
    ...typography.title,
    marginBottom: spacing.lg,
    textAlign: 'center',
    color: colors.text.primary,
  },
  onboardingSubtitle: {
    ...typography.body,
    textAlign: 'center',
    color: colors.text.secondary,
    marginBottom: spacing.sm,
  },
  onboardingCaption: {
    ...typography.caption,
    textAlign: 'center',
    color: colors.text.tertiary,
    marginBottom: spacing.xxl,
  },

  // Goal details
  goalDetailsContainer: {
    flex: 1,
    padding: spacing.lg,
  },
  goalDetailsTitle: {
    ...typography.title,
    color: colors.text.primary,
  },
  goalDetailsDescription: {
    color: colors.text.secondary,
    marginTop: spacing.sm,
    ...typography.body,
  },
  goalDetailsMeta: {
    color: colors.text.tertiary,
    marginTop: spacing.sm,
    ...typography.caption,
  },
  goalDetailsProgress: {
    marginTop: spacing.xl,
  },
  goalDetailsProgressLabel: {
    marginBottom: spacing.sm,
    ...typography.body,
  },
  goalDetailsActions: {
    marginTop: spacing.xl,
  },
  goalDetailsNavigation: {
    marginTop: spacing.xl,
  },
});
