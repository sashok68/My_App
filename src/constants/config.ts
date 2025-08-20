export const APP_CONFIG = {
  MAX_FREE_GOALS: 2,
  PROGRESS_STEP: 0.1,
  ASYNC_STORAGE_KEYS: {
    GOALS: 'goals',
  },
} as const;

export const MESSAGES = {
  ERRORS: {
    GOAL_LIMIT: 'Доступно максимум 2 цели в бесплатной версии.',
    VALIDATION: 'Название цели обязательно.',
    GOAL_NOT_FOUND: 'Цель не найдена',
  },
  EMPTY_STATE: {
    NO_GOALS_TITLE: 'У вас пока нет целей',
    NO_GOALS_SUBTITLE: 'Создайте первую цель, чтобы начать отслеживать прогресс',
  },
  BUTTONS: {
    CREATE: 'Создать',
    CREATE_FIRST_GOAL: 'Создать первую цель',
    SAVE: 'Сохранить',
    BACK: 'Назад',
    HOME: 'На главную',
    START: 'Начать',
    UNDERSTAND: 'Понятно',
    PROGRESS_MINUS: '-10%',
    PROGRESS_PLUS: '+10%',
  },
  TITLES: {
    GOALS: 'Цели',
    GOAL_CREATION: 'Создание цели',
    GOAL_DETAILS: 'Детали цели',
    GOAL_TRACKER: 'Трекер целей',
  },
} as const;

export const PLACEHOLDERS = {
  GOAL_TITLE: 'Например: Пробежать 10 км',
  GOAL_DESCRIPTION: 'Краткое описание',
} as const;
