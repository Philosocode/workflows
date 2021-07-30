import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import omit from "lodash/omit";

import { IHook, IHookState, IUpdateHookPayload } from "./hook.types";

const initialState: IHookState = {
  hooks: {},
  hookIds: [],
};

const hookSlice = createSlice({
  name: "hook",
  initialState,
  reducers: {
    createHook: (state, action: PayloadAction<IHook>) => {
      const newHook = { ...action.payload };

      state.hooks[newHook.id] = newHook;
      state.hookIds.push(newHook.id);
    },
    updateHook: (state, action: PayloadAction<IUpdateHookPayload>) => {
      const { id, updates } = action.payload;

      state.hooks[id] = {
        ...state.hooks.id,
        ...updates,
      };
    },
    deleteHook: (state, action) => {
      state.hooks = omit(state.hooks, [action.payload]);
      state.hookIds = state.hookIds.filter((id) => id !== action.payload);
    },
  },
});

export const hookReducer = hookSlice.reducer;
export const { createHook, updateHook, deleteHook } = hookSlice.actions;
