import { SetState } from "zustand";

import { IConsumeActions, IConsumeStore } from "./consume.types";

export function consumeActions(set: SetState<IConsumeStore>): IConsumeActions {
  return {
    setMaterialType: (type) =>
      set((state) => ({ ...state, materialType: type })),
    finishStudyBlock: () =>
      set((state) => ({
        ...state,
        studyBlockCount: state.studyBlockCount + 1,
      })),
    reset: () =>
      set((state) => ({
        ...state,
        materialType: "reading",
        studyBlockCount: 0,
      })),
  };
}
