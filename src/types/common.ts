export type Result<T, E = string> = 
  | { ok: true; data: T }
  | { ok: false; error: E };

export type GoalStatus = 'active' | 'completed' | 'archived';

export type AddGoalError = 'limit' | 'validation';
