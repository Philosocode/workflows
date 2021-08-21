import create from "zustand";
import { timerActions } from "./timer.actions";

import { ITimerState, ITimerStore } from "./timer.types";

export const initialState: ITimerState = {
  isRunning: false,
  pauseTime: 0,
  startTime: 0,
};

export const useTimerStore = create<ITimerStore>((set) => ({
  ...initialState,
  ...timerActions(set),
}));

export const selectTimerStarted = (state: ITimerState) =>
  state.isRunning || state.pauseTime > 0;
