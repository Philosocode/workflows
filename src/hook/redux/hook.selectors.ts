import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";
import { IHook } from "../shared/hook.types";

const selectHookState = (state: TAppState) => state.hook;

export const selectHookHash = createSelector(
  [selectHookState],
  (state) => state.hooks,
);

export const selectCurrentHookIds = createSelector(
  [selectHookState],
  (state) => state.currentHookIds,
);

export const selectPreviousHookIds = createSelector(
  [selectHookState],
  (state) => state.previousHookIds,
);

export const selectCurrentHooks = createSelector(
  [selectHookHash, selectCurrentHookIds],
  (hash, ids) => {
    const hooks: IHook[] = [];

    ids.forEach((id) => {
      const currentHook = hash[id];
      if (!currentHook.isPrevious) hooks.push(hash[id]);
    });

    return hooks;
  },
);

export const selectPastHooks = createSelector(
  [selectHookHash, selectPreviousHookIds],
  (hash, ids) => {
    const hooks: IHook[] = [];

    ids.forEach((id) => {
      const currentHook = hash[id];
      if (currentHook.isPrevious) hooks.push(hash[id]);
    });

    return hooks;
  },
);
