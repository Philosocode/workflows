import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TAppState } from "../../shared/redux/store";

interface IStepState {
  currentStep: number;
  redirectUrl: string;
}

const initialState: IStepState = {
  currentStep: 0,
  redirectUrl: "/",
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setRedirectUrl: (state, action: PayloadAction<string>) => {
      state.redirectUrl = action.payload;
    },
  },
});

export const stepReducer = stepSlice.reducer;
export const { setCurrentStep, setRedirectUrl } = stepSlice.actions;

// selector
export const selectCurrentStep = (state: TAppState) => state.step.currentStep;
export const selectNextStep = (state: TAppState) => state.step.currentStep + 1;
export const selectRedirectUrl = (state: TAppState) => state.step.redirectUrl;
