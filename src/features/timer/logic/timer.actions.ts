import { SetState } from "zustand";
import produce from "immer";

import { ITimerActions, ITimerState, ITimerStore } from "./timer.types";
import { initialState } from "./timer.store";

export function timerActions(set: SetState<ITimerStore>): ITimerActions {
  return {
    startTimer: () => {
      set(
        produce((state: ITimerState) => {
          state.startTime = Date.now();
          state.isRunning = true;
        }),
      );
    },
    pauseTimer: () => {
      set(
        produce((state: ITimerState) => {
          state.pauseTime = Date.now() - state.startTime;
          state.startTime = 0;
          state.isRunning = false;
        }),
      );
    },
    unpauseTimer: () => {
      set(
        produce((state: ITimerState) => {
          state.startTime = Date.now() - state.pauseTime;
          state.pauseTime = 0;
          state.isRunning = true;
        }),
      );
    },
    resetTimer: () => {
      set((state) => ({
        ...state,
        ...initialState,
      }));
    },
  };
}
