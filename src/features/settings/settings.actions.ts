import { SetState } from "zustand";

import { ISettingsStore } from "./settings.types";

export function settingsActions(set: SetState<ISettingsStore>) {
  return {
    toggleShowStopwatchTimerLabel: () => {
      set((state) => {
        state.showStopwatchTimerLabel = !state.showStopwatchTimerLabel;
      });
    },
  };
}
