export type TPracticeMode = "numQuestions" | "timer";

export interface ITopic {
  id: string;
  title: string;
  totalTime: number;
  totalCount: number;
}

interface IAmount {
  min: number;
  max: number;
}

interface IUpdateTopic {
  id: string;
  updates: {
    title?: string;
    totalTime?: number;
    totalCount?: number;
  };
}

export interface IPracticeState {
  amount: IAmount;
  practiceMode: TPracticeMode;
  topics: {
    [key: string]: ITopic;
  };
  topicIds: string[];
}

export interface IPracticeActions {
  createTopic: (topic: ITopic) => void;
  updateTopic: (updates: IUpdateTopic) => void;
  deleteTopic: (id: string) => void;
  setAmount: (amount: IAmount) => void;
  setPracticeMode: (mode: TPracticeMode) => void;
  reset: () => void;
}

export interface IPracticeStore extends IPracticeState, IPracticeActions {}
