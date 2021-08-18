import create from "zustand";

import { IHookStore } from "./hook.types";

export const useHookStore = create<IHookStore>((set) => ({
  // data
  completedIds: new Set<string>(),

  // actions
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
  resetCompletedIds: () => set(() => ({}), true),
}));
