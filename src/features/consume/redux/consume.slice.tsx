import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IConsumeState,
  ISetMaterialDataPayload,
  IUpdateSettingsPayload,
} from "./consume.types";

const initialState: IConsumeState = {
  materialType: "reading",
  studyBlockCount: 0,
  studyBlockTime: 5,
  totalStudyTime: 0,
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
    },
    nextStudyBlock: (state) => {
      state.studyBlockCount++;
    },
    updateTotalStudyTime: (state, action: PayloadAction<number>) => {
      state.totalStudyTime = action.payload;
    },
    updateSettings: (state, action: PayloadAction<IUpdateSettingsPayload>) => {
      return { ...state, ...action.payload };
    },
    resetConsume: () => {
      return initialState;
    },
  },
});

export const consumeReducer = consumeSlice.reducer;
export const {
  setMaterialData,
  nextStudyBlock,
  resetConsume,
  updateTotalStudyTime,
  updateSettings,
} = consumeSlice.actions;
