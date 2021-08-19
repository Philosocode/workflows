export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHook {
  id: string;
  prompt: string;
}

export type THookHash = Record<string, IHook>;

export interface IHookState {
  completedIds: Set<string>;
}

export interface IHookActions {
  toggleCompletedId: (id: string) => void;
  resetHookState: () => void;
}

export interface IHookStore extends IHookState, IHookActions {}
