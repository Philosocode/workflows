export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHook {
  id: string;
  prompt: string;
}

export type THookHash = Record<string, IHook>;
