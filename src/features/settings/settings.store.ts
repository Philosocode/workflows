import create from "zustand";

import { ISettingsState, ISettingsStore } from "./settings.types";
import { settingsActions } from "./settings.actions";

export const initialState: ISettingsState = {
  showStopwatchTimerLabel: true,
};

export const useSettingsStore = create<ISettingsStore>((set) => ({
  ...initialState,
  ...settingsActions(set),
}));
