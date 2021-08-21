export interface ISettingsState {
  showStopwatchTimerLabel: boolean;
}

export interface ISettingsActions {
  toggleShowStopwatchTimerLabel: () => void;
}

export interface ISettingsStore extends ISettingsState, ISettingsActions {}
