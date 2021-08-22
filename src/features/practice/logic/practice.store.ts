import create from "zustand";

import { practiceQuestionActions } from "./practice.actions";
import { initialState } from "./practice.constants";
import { IPracticeStore } from "./practice.types";

export const usePracticeStore = create<IPracticeStore>((set) => ({
  ...initialState,
  ...practiceQuestionActions(set),
}));
