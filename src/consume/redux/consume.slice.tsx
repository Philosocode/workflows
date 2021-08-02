import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IConsumeState,
  ISetMaterialDataPayload,
  IUpdateSettingsPayload,
} from "./consume.types";

const initialState: IConsumeState = {
  materialType: "reading",
  step: 1,
  studyBlockCount: 0,
  studyBlockTime: 5,
  shouldPlayAlarm: false,
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
  goToStudy,
  nextStudyBlock,
  newMaterial,
  updateSettings,
} = consumeSlice.actions;
