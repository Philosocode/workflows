export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHook {
  id: string;
  prompt: string;
}

export type THookHash = Record<string, IHook>;

export interface IHookState {
  completedIds: Set<string>;
  totalHooksCompleted: number;
}

export interface IHookActions {
  updateTotalHooksCompleted: () => void;
  toggleCompletedId: (id: string) => void;
  reset: () => void;
}

export interface IHookStore extends IHookState, IHookActions {}
