export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHook {
  content: string;
  id: string;
  title: string;
  isExpanded: boolean;
}

export interface IHookState {
  hooks: {
    [key: string]: IHook;
  };
  currentHookIds: string[];
  previousHookIds: string[];
}

// actions
export interface IUpdateHookPayload {
  id: string;
  updates: {
    title?: string;
    content?: string;
    isExpanded?: boolean;
  };
}
export interface IRepositionHookPayload {
  oldIndex: number;
  newIndex: number;
  isPrevious: boolean;
}
