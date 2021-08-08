import { createSelector } from "@reduxjs/toolkit";

import { TAppState } from "shared/redux/store";

export const selectPracticeQuestionsState = (state: TAppState) =>
  state.practiceQuestions;

export const selectAmount = createSelector(
  [selectPracticeQuestionsState],
  (state) => state.amount,
);

export const selectPracticeMode = createSelector(
  [selectPracticeQuestionsState],
  (state) => state.practiceMode,
);

export const selectPracticeTopics = createSelector(
  [selectPracticeQuestionsState],
  (state) => state.topics,
);

export const selectPracticeTopicIds = createSelector(
  [selectPracticeQuestionsState],
  (state) => state.topicIds,
);
