export type TTimerStatus = "running" | "paused" | "stopped";

export interface ITimerState {
  isRunning: boolean;
  pauseTime: number;
  startTime: number;
}

export interface ITimerActions {
  startTimer: () => void;
  resetTimer: () => void;
  pauseTimer: () => void;
  unpauseTimer: () => void;
}

export interface ITimerStore extends ITimerState, ITimerActions {}
