import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TAppState } from "../shared/redux/store";

interface IStepState {
  currentStep: number;
}

const initialState: IStepState = {
  currentStep: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const stepReducer = stepSlice.reducer;
export const { setCurrentStep } = stepSlice.actions;

// selector
export const selectCurrentStep = (state: TAppState) => state.step.currentStep;
export const selectNextStep = (state: TAppState) => state.step.currentStep + 1;
