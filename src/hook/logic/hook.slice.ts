import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import omit from "lodash/omit";

import { IHook, IHookState } from "./hook.types";

const initialState: IHookState = {
  hooks: {},
};

const hookSlice = createSlice({
  name: "hook",
  initialState,
  reducers: {
    createHook: (state, action: PayloadAction<IHook>) => {
      const newHook = { ...action.payload };

      state.hooks[newHook.id] = newHook;
    },
    updateHook: (state, action) => {
      const { hookId, updates } = action.payload;

      const oldHook = state.hooks[hookId];

      state.hooks[hookId] = {
        ...oldHook,
        ...updates,
      };
    },
    deleteHook: (state, action) => {
      state.hooks = omit(state.hooks, [action.payload.hookId]);
    },
  },
});

export const hookReducer = hookSlice.reducer;
export const { createHook, updateHook, deleteHook } = hookSlice.actions;
