/**
 * Форматирует прогресс в проценты
 */
export function formatProgress(progress: number | undefined): string {
  return `${Math.round((progress || 0) * 100)}%`;
}

/**
 * Форматирует счетчик целей
 */
export function formatGoalCounter(current: number, max: number): string {
  return `Целей: ${current}/${max} (бесплатная версия)`;
}

/**
 * Ограничивает прогресс в диапазоне 0-1
 */
export function clampProgress(progress: number): number {
  return Math.max(0, Math.min(1, progress));
}

/**
 * Проверяет достижение максимального прогресса
 */
export function isProgressComplete(progress: number | undefined): boolean {
  return (progress || 0) >= 1;
}
