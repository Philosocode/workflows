import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";

export const selectConsumeState = (state: TAppState) => state.consume;

export const selectMaterialName = createSelector(
  [selectConsumeState],
  (state) => state.materialName,
);

export const selectMaterialType = createSelector(
  [selectConsumeState],
  (state) => state.materialType,
);

export const selectStep = createSelector(
  [selectConsumeState],
  (state) => state.step,
);
