export type THookType = "common" | "connect" | "memorize" | "process";

export interface IHook {
  content: string;
  id: string;
  title: string;
  isPrevious: boolean;
  isExpanded: boolean;
}

export interface IHookState {
  hooks: {
    [key: string]: IHook;
  };
  hookIds: string[];
}

// actions
export interface IUpdateHookPayload {
  id: string;
  updates: {
    title?: string;
    content?: string;
    isPrevious?: boolean;
    isExpanded?: boolean;
  };
}
