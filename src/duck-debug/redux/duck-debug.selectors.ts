import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";

export const selectDuckDebugState = (state: TAppState) => state.duckDebug;

export const selectDuckDebugStep = createSelector(
  [selectDuckDebugState],
  (state) => state.currentStep,
);

export const selectIsProgrammer = createSelector(
  [selectDuckDebugState],
  (state) => state.isProgrammer,
);

export const selectRedirectUrl = createSelector(
  [selectDuckDebugState],
  (state) => state.redirectUrl,
);
