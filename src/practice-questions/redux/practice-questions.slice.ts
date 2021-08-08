import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { omit } from "lodash";

import {
  IPracticeQuestionsState,
  ITopic,
  IUpdateTopicPayload,
  TPracticeMode,
} from "practice-questions/shared/practice-questions.types";

const initialState: IPracticeQuestionsState = {
  amount: {
    min: 5,
    max: 10,
  },
  practiceMode: "numQuestions",
  topics: {},
  topicIds: [],
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
    resetState: () => {
      return initialState;
    },
    createTopic: (state, action: PayloadAction<ITopic>) => {
      const newTopic = { ...action.payload };

      state.topics[newTopic.id] = newTopic;
      state.topicIds.unshift(newTopic.id);
    },
    updateTopic: (state, action: PayloadAction<IUpdateTopicPayload>) => {
      const { id, updates } = action.payload;

      state.topics[id] = {
        ...state.topics[id],
        ...updates,
      };
    },
    deleteTopic: (state, action: PayloadAction<string>) => {
      state.topics = omit(state.topics, [action.payload]);

      state.topicIds = state.topicIds.filter((id) => id !== action.payload);
    },
  },
});

export const practiceQuestionsReducer = practiceQuestionsSlice.reducer;
export const {
  resetState,
  setAmount,
  setPracticeMode,
  createTopic,
  deleteTopic,
  updateTopic,
} = practiceQuestionsSlice.actions;
