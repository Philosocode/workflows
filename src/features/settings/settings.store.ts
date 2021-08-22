import create from "zustand";

import { ISettingsState, ISettingsStore } from "./settings.types";
import { settingsActions } from "./settings.actions";
import { ELocalStorageKeys, getLocalStorage } from "services/local-storage";

export const initialState: ISettingsState = getLocalStorage(
  ELocalStorageKeys.Settings,
) ?? { showStopwatchTimerLabel: true };

export const useSettingsStore = create<ISettingsStore>((set) => ({
  ...initialState,
  ...settingsActions(set),
}));
