import { IPracticeState } from "./practice.types";

export const initialState: IPracticeState = {
  amount: {
    min: 5,
    max: 10,
  },
  practiceMode: "numQuestions",
  topics: {},
  topicIds: [],
};
