import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDuckDebugState } from "./duck-debug.types";

const initialState: IDuckDebugState = {
  currentStep: 0,
  isProgrammer: false,
};

const duckDebugSlice = createSlice({
  name: "duckDebug",
  initialState,
  reducers: {
    setIsProgrammer: (state, action: PayloadAction<boolean>) => {
      state.isProgrammer = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const duckDebugReducer = duckDebugSlice.reducer;
export const { setStep } = duckDebugSlice.actions;
