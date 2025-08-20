import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { GOALS, type Goal } from '../data/goals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_CONFIG } from '../constants/config';
import { clampProgress, isProgressComplete } from '../utils/formatting';
import type { AddGoalError, Result } from '../types/common';

export type AddGoalInput = {
  title: string;
  description?: string;
  dueDate?: string;
};

export type AddGoalResult = Result<Goal, AddGoalError>;

type GoalsContextValue = {
  goals: Goal[];
  addGoal: (input: AddGoalInput) => AddGoalResult;
  updateProgress: (id: string, progress: number) => void;
  getGoalById: (id: string) => Goal | undefined;
};

const GoalsContext = createContext<GoalsContextValue | undefined>(undefined);

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const isHydratedRef = useRef(false);

  // Загрузка из AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(APP_CONFIG.ASYNC_STORAGE_KEYS.GOALS);
        if (raw) {
          const parsed: Goal[] = JSON.parse(raw);
          setGoals(parsed);
        } else {
          // Инициализация одной мок-целью для демонстрации
          setGoals(GOALS.slice(0, 1));
        }
      } catch {
        setGoals(GOALS.slice(0, 1));
      } finally {
        isHydratedRef.current = true;
      }
    })();
  }, []);

  // Сохранение в AsyncStorage при изменении (после гидратации)
  useEffect(() => {
    if (!isHydratedRef.current) return;
    AsyncStorage.setItem(APP_CONFIG.ASYNC_STORAGE_KEYS.GOALS, JSON.stringify(goals)).catch(() => {});
  }, [goals]);

  const addGoal = useCallback((input: AddGoalInput): AddGoalResult => {
    if (!input.title.trim()) {
      return { ok: false, error: 'validation' };
    }
    if (goals.length >= APP_CONFIG.MAX_FREE_GOALS) {
      return { ok: false, error: 'limit' };
    }
    const newGoal: Goal = {
      id: String(Date.now()),
      title: input.title.trim(),
      description: input.description?.trim() || undefined,
      status: 'active',
      createdAt: new Date().toISOString(),
      dueDate: input.dueDate,
    };
    setGoals((prev) => [newGoal, ...prev]);
    return { ok: true, data: newGoal };
  }, [goals.length]);

  const updateProgress = useCallback((id: string, progress: number) => {
    const clamped = clampProgress(progress);
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, progress: clamped, status: isProgressComplete(clamped) ? 'completed' : g.status } : g))
    );
  }, []);

  const getGoalById = useCallback((id: string) => goals.find((g) => g.id === id), [goals]);

  const value = useMemo<GoalsContextValue>(() => ({ goals, addGoal, updateProgress, getGoalById }), [goals, addGoal, updateProgress, getGoalById]);

  return <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>;
}

export function useGoals(): GoalsContextValue {
  const ctx = useContext(GoalsContext);
  if (!ctx) {
    throw new Error('useGoals must be used within a GoalsProvider');
  }
  return ctx;
}


