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
    updateHook: (state, action: PayloadAction<IHook>) => {
      const { id, title, content } = action.payload;

      state.hooks[id].title = title;
      state.hooks[id].content = content;
    },
    deleteHook: (state, action) => {
      state.hooks = omit(state.hooks, [action.payload]);
    },
  },
});

export const hookReducer = hookSlice.reducer;
export const { createHook, updateHook, deleteHook } = hookSlice.actions;
