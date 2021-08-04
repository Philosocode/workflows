import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";

export const selectDuckDebugState = (state: TAppState) => state.duckDebug;

export const selectRedirectUrl = createSelector(
  [selectDuckDebugState],
  (state) => state.redirectUrl,
);
