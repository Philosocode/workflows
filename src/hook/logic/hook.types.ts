export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHook {
  content: string;
  id: string;
  title: string;
}

export interface IHookState {
  hooks: {
    [key: string]: IHook;
  };
}