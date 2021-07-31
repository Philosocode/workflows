import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import omit from "lodash/omit";

import { IHook, IHookState, IUpdateHookPayload } from "./hook.types";

const initialState: IHookState = {
  hooks: {
    a: {
      id: "a",
      content: "a",
      isExpanded: false,
      isPrevious: false,
      title: "a",
    },
    b: {
      id: "b",
      content: "b",
      isExpanded: false,
      isPrevious: false,
      title: "b",
    },
    c: {
      id: "c",
      content: "c",
      isExpanded: false,
      isPrevious: false,
      title: "c",
    },
  },
  hookIds: ["a", "b", "c"],
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
        ...state.hooks[id],
        ...updates,
      };
    },
    repositionHook: (state, action) => {
      const { oldIndex, newIndex } = action.payload;

      const hookIds = state.hookIds;
      const [hookToReposition] = hookIds.splice(oldIndex, 1);

      hookIds.splice(newIndex, 0, hookToReposition);
    },
    deleteHook: (state, action) => {
      state.hooks = omit(state.hooks, [action.payload]);
      state.hookIds = state.hookIds.filter((id) => id !== action.payload);
    },
    toggleAllHooks: (state) => {
      let allExpanded = Object.values(state.hooks).every(
        (hook) => hook.isExpanded,
      );

      // contract if all hooks are expanded
      const newValue = allExpanded ? false : true;

      state.hookIds.forEach((id) => {
        state.hooks[id].isExpanded = newValue;
      });
    },
  },
});

export const hookReducer = hookSlice.reducer;
export const {
  createHook,
  updateHook,
  deleteHook,
  repositionHook,
  toggleAllHooks,
} = hookSlice.actions;
