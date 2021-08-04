import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDuckDebugState } from "./duck-debug.types";

const initialState: IDuckDebugState = {
  redirectUrl: "/",
};

const duckDebugSlice = createSlice({
  name: "duckDebug",
  initialState,
  reducers: {
    setRedirectUrl: (state, action: PayloadAction<string>) => {
      state.redirectUrl = action.payload;
    },
  },
});

export const duckDebugReducer = duckDebugSlice.reducer;
export const { setRedirectUrl } = duckDebugSlice.actions;
