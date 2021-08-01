import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import omit from "lodash/omit";

import {
  IHook,
  IHookState,
  IRepositionHookPayload,
  IUpdateHookPayload,
} from "hook/shared/hook.types";
import { nextStudyBlock } from "consume/redux/consume.slice";

const initialState: IHookState = {
  hooks: {
    a: {
      id: "a",
      content: "a",
      isExpanded: false,
      title: "a",
    },
    b: {
      id: "b",
      content: "b",
      isExpanded: false,
      title: "b",
    },
    c: {
      id: "c",
      content: "c",
      isExpanded: false,
      title: "c",
    },
    d: {
      id: "d",
      content: "d",
      isExpanded: false,
      title: "d",
    },
    e: {
      id: "e",
      content: "e",
      isExpanded: false,
      title: "e",
    },
    f: {
      id: "f",
      content: "f",
      isExpanded: false,
      title: "f",
    },
  },
  currentHookIds: ["a", "b", "c"],
  previousHookIds: ["d", "e", "f"],
};

const hookSlice = createSlice({
  name: "hook",
  initialState,
  reducers: {
    createHook: (state, action: PayloadAction<IHook>) => {
      const newHook = { ...action.payload };

      state.hooks[newHook.id] = newHook;
      state.currentHookIds.push(newHook.id);
    },
    updateHook: (state, action: PayloadAction<IUpdateHookPayload>) => {
      const { id, updates } = action.payload;

      state.hooks[id] = {
        ...state.hooks[id],
        ...updates,
      };
    },
    repositionHook: (state, action: PayloadAction<IRepositionHookPayload>) => {
      const { oldIndex, newIndex, isPrevious } = action.payload;

      const hookIds = isPrevious ? state.previousHookIds : state.currentHookIds;
      const [hookToReposition] = hookIds.splice(oldIndex, 1);

      hookIds.splice(newIndex, 0, hookToReposition);
    },
    deleteHook: (state, action) => {
      const isPrevious = state.previousHookIds.includes(action.payload);

      state.hooks = omit(state.hooks, [action.payload]);

      if (isPrevious) {
        state.previousHookIds = state.previousHookIds.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.currentHookIds = state.currentHookIds.filter(
          (id) => id !== action.payload,
        );
      }
    },
    toggleAllHooks: (state) => {
      const allHooks = Object.values(state.hooks);
      let allExpanded = allHooks.every((hook) => hook.isExpanded);

      // contract if all hooks are expanded
      const newValue = allExpanded ? false : true;
      allHooks.forEach((hook) => (state.hooks[hook.id].isExpanded = newValue));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(nextStudyBlock, (state) => {
      // move current hook ids into previous
      state.previousHookIds.push(...state.currentHookIds);
      state.currentHookIds = [];
    });
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
