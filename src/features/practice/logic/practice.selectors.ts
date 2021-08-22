import { IPracticeState } from "./practice.types";

export const selectTotalPracticeCount = (state: IPracticeState) => {
  return Object.values(state.topics).reduce(
    (acc, curr) => acc + curr.totalCount,
    0,
  );
};

export const selectTotalPracticeTime = (state: IPracticeState) => {
  return Object.values(state.topics).reduce(
    (acc, curr) => acc + curr.totalTime,
    0,
  );
};
