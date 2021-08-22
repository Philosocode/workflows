import { SetState } from "zustand";
import { IHookActions, IHookStore } from "./hook.types";

export function hookActions(set: SetState<IHookStore>): IHookActions {
  return {
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

    reset: () =>
      set((state) => ({
        ...state,
        completedIds: new Set<string>(),
        totalHooksCompleted: 0,
      })),
  };
}
