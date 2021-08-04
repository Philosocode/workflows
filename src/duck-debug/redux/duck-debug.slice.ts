import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDuckDebugState } from "./duck-debug.types";

const initialState: IDuckDebugState = {
  currentStep: 1,
  isProgrammer: false,
  redirectUrl: "/",
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
    setRedirectUrl: (state, action: PayloadAction<string>) => {
      state.redirectUrl = action.payload;
    },
  },
});

export const duckDebugReducer = duckDebugSlice.reducer;
export const { setStep, setIsProgrammer, setRedirectUrl } =
  duckDebugSlice.actions;
