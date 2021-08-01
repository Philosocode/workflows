import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IConsumeState, IStepOnePayload } from "./consume.types";

const initialState: IConsumeState = {
  materialType: "reading",
  step: 1,
  studyBlockCount: 0,
  studyBlockTime: 5,
};

const consumeSlice = createSlice({
  name: "consume",
  initialState,
  reducers: {
    stepOne: (state, action: PayloadAction<IStepOnePayload>) => {
      const { payload } = action;

      state.materialType = payload.materialType;
      state.studyBlockTime = payload.studyBlockTime;
    },
    goToStudy: (state) => {
      // TODO: change this. This is bad
      state.step = 8;
    },
    nextStep: (state) => {
      state.step++;
    },
    nextStudyBlock: (state) => {
      state.studyBlockCount++;
      state.step = 8;
    },
    newMaterial: () => {
      return initialState;
    },
  },
});

export const consumeReducer = consumeSlice.reducer;
export const { stepOne, nextStep, goToStudy, nextStudyBlock, newMaterial } =
  consumeSlice.actions;
