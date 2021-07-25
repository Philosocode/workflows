import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IConsumeState, IStepOnePayload } from "./consume.types";

const initialState: IConsumeState = {
  materialName: "",
  materialType: "reading",
  step: 0,
};

const consumeSlice = createSlice({
  name: "consume",
  initialState,
  reducers: {
    stepOne: (state, action: PayloadAction<IStepOnePayload>) => {
      const { payload } = action;

      state.materialName = payload.materialName;
      state.materialType = payload.materialType;
      state.step++;
    },
  },
});

export const consumeReducer = consumeSlice.reducer;
export const { stepOne } = consumeSlice.actions;
