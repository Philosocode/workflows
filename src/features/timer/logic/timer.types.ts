export type TTimerStatus = "running" | "paused" | "stopped";
export type TTimerType = "countdown" | "stopwatch";

export interface ITimerState {
  isRunning: boolean;
  pauseTime: number;
  startTime: number;
}

export interface ITimerActions {
  start: () => void;
  reset: () => void;
  pause: () => void;
  unpause: () => void;
}

export interface ITimerStore extends ITimerState, ITimerActions {}
