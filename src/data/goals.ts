import type { GoalStatus } from '../types/common';

export type Goal = {
  id: string;
  title: string;
  description?: string;
  status: GoalStatus;
  createdAt: string; // ISO
  dueDate?: string; // ISO
  // Доля прогресса от 0 до 1
  progress?: number;
};

export const GOALS: Goal[] = [
  {
    id: '1',
    title: 'Пробежать 10 км',
    description: 'Подготовка к забегу через месяц',
    status: 'active',
    createdAt: '2025-08-01T09:00:00.000Z',
    dueDate: '2025-09-01T09:00:00.000Z',
    progress: 0.3,
  },
  {
    id: '2',
    title: 'Прочитать 12 книг',
    description: 'По книге в месяц',
    status: 'active',
    createdAt: '2025-01-10T09:00:00.000Z',
    progress: 0.5,
  },
  {
    id: '3',
    title: 'Выучить основы испанского',
    status: 'completed',
    createdAt: '2024-10-01T09:00:00.000Z',
    dueDate: '2025-02-01T09:00:00.000Z',
    progress: 1,
  },
  {
    id: '4',
    title: 'Сделать ремонт в спальне',
    status: 'active',
    createdAt: '2025-07-15T09:00:00.000Z',
    progress: 0.1,
  },
  {
    id: '5',
    title: 'Собрать финансовую подушку',
    description: '3-6 месяцев расходов',
    status: 'archived',
    createdAt: '2024-05-20T09:00:00.000Z',
    progress: 0,
  },
];


