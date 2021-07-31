import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";
import { IHook } from "./hook.types";

const selectHookState = (state: TAppState) => state.hook;

export const selectHookHash = createSelector(
  [selectHookState],
  (state) => state.hooks,
);

export const selectHookIds = createSelector(
  [selectHookState],
  (state) => state.hookIds,
);

export const selectCurrentHooks = createSelector(
  [selectHookHash, selectHookIds],
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
  [selectHookHash, selectHookIds],
  (hash, ids) => {
    const hooks: IHook[] = [];

    ids.forEach((id) => {
      const currentHook = hash[id];
      if (currentHook.isPrevious) hooks.push(hash[id]);
    });

    return hooks;
  },
);
