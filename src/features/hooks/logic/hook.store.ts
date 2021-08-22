import create from "zustand";

import { hookActions } from "./hook.actions";
import { IHookState, IHookStore } from "./hook.types";

const initialState: IHookState = {
  completedIds: new Set<string>(),
  totalHooksCompleted: 0,
};

export const useHookStore = create<IHookStore>((set) => ({
  ...initialState,
  ...hookActions(set),
}));
