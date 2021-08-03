import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IConsumeState,
  ISetMaterialDataPayload,
  IUpdateSettingsPayload,
} from "./consume.types";

const initialState: IConsumeState = {
  materialType: "reading",
  currentStep: 1,
  studyBlockCount: 0,
  studyBlockTime: 5,
  shouldPlayAlarm: true,
};

const consumeSlice = createSlice({
  name: "consume",
  initialState,
  reducers: {
    setMaterialData: (
      state,
      action: PayloadAction<ISetMaterialDataPayload>,
    ) => {
      const { payload } = action;

      state.materialType = payload.materialType;
      state.studyBlockTime = payload.studyBlockTime;
      state.shouldPlayAlarm = payload.shouldPlayAlarm;
    },
    goToStudy: (state) => {
      state.currentStep = 8;
    },
    nextStep: (state) => {
      state.currentStep++;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStudyBlock: (state) => {
      state.studyBlockCount++;
      state.currentStep = 8;
    },
    updateSettings: (state, action: PayloadAction<IUpdateSettingsPayload>) => {
      return { ...state, ...action.payload };
    },
    newMaterial: () => {
      return initialState;
    },
  },
});

export const consumeReducer = consumeSlice.reducer;
export const {
  setMaterialData,
  nextStep,
  setStep,
  goToStudy,
  nextStudyBlock,
  newMaterial,
  updateSettings,
} = consumeSlice.actions;
