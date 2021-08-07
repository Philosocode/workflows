import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IPracticeQuestionsState,
  TPracticeMode,
} from "practice-questions/shared/practice-questions.types";

const initialState: IPracticeQuestionsState = {
  amount: {
    min: 5,
    max: 10,
  },
  practiceMode: "numQuestions",
};

const practiceQuestionsSlice = createSlice({
  name: "practiceQuestions",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<{ min: number; max: number }>) => {
      const amount = action.payload;

      if (amount.min <= 0) return;
      if (amount.max < amount.min) return;

      state.amount = amount;
    },
    setPracticeMode: (state, action: PayloadAction<TPracticeMode>) => {
      state.practiceMode = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const practiceQuestionsReducer = practiceQuestionsSlice.reducer;
export const { reset, setAmount, setPracticeMode } =
  practiceQuestionsSlice.actions;
