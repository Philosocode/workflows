import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDuckDebugState } from "./duck-debug.types";

const initialState: IDuckDebugState = {
  currentStep: 1,
  isProgrammer: false,
};

const duckDebugSlice = createSlice({
  name: "duckDebug",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep++;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const duckDebugReducer = duckDebugSlice.reducer;
export const { nextStep, setStep } = duckDebugSlice.actions;
