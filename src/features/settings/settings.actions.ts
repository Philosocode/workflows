import { SetState } from "zustand";

import { ELocalStorageKeys, setLocalStorage } from "services/local-storage";
import { ISettingsStore } from "./settings.types";

export function settingsActions(set: SetState<ISettingsStore>) {
  return {
    toggleShowStopwatchTimerLabel: () => {
      set((state) => {
        const updatedValue = !state.showStopwatchTimerLabel;
        state.showStopwatchTimerLabel = updatedValue;

        setLocalStorage(ELocalStorageKeys.Settings, state);
      });
    },
  };
}
