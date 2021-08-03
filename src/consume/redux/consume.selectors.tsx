import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";

export const selectConsumeState = (state: TAppState) => state.consume;

export const selectMaterialType = createSelector(
  [selectConsumeState],
  (state) => state.materialType,
);

export const selectConsumeStep = createSelector(
  [selectConsumeState],
  (state) => state.currentStep,
);

export const selectStudyBlockCount = createSelector(
  [selectConsumeState],
  (state) => state.studyBlockCount,
);

export const selectStudyBlockTime = createSelector(
  [selectConsumeState],
  (state) => state.studyBlockTime,
);

export const selectShouldPlayAlarm = createSelector(
  [selectConsumeState],
  (state) => state.shouldPlayAlarm,
);
