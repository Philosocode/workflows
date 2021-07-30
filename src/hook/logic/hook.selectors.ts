import { createSelector } from "@reduxjs/toolkit";
import { reverse } from "lodash";

import { TAppState } from "shared/redux/store";

const selectHookState = (state: TAppState) => state.hook;

export const selectHookHash = createSelector(
  [selectHookState],
  (state) => state.hooks,
);

export const selectCurrentHooks = createSelector([selectHookState], (state) =>
  reverse(Object.values(state.hooks).filter((hook) => !hook.isPrevious)),
);

export const selectPastHooks = createSelector([selectHookState], (state) =>
  reverse(Object.values(state.hooks).filter((hook) => hook.isPrevious)),
);
