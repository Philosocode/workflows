import create from "zustand";

import { IHookState, IHookStore } from "./hook.types";

const initialState: IHookState = {
  completedIds: new Set<string>(),
  totalHooksCompleted: 0,
};

export const useHookStore = create<IHookStore>((set) => ({
  ...initialState,

  // actions
  updateTotalHooksCompleted: () => {
    set((state) => {
      return {
        totalHooksCompleted:
          state.totalHooksCompleted + state.completedIds.size,
        completedIds: new Set<string>(),
      };
    });
  },
  toggleCompletedId: (id: string) =>
    set((state) => {
      let updatedIds: Set<string> = new Set(state.completedIds);

      if (state.completedIds.has(id)) {
        updatedIds.delete(id);
      } else {
        updatedIds.add(id);
      }
      return { completedIds: updatedIds };
    }),

  resetHookStore: () =>
    set((state) => ({
      ...state,
      ...initialState,
    })),
}));
