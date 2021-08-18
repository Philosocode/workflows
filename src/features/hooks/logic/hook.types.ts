export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHookPrompt {
  id: string;
  prompt: string;
}

export type THookPromptHash = Record<string, IHookPrompt>;
