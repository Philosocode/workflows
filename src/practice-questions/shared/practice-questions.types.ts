export type TPracticeMode = "numQuestions" | "timer";

export interface ITopic {
  id: string;
  title: string;
  totalTime: number;
  totalCount: number;
}

export interface IPracticeQuestionsState {
  amount: {
    min: number;
    max: number;
  };
  practiceMode: TPracticeMode;
  topics: {
    [key: string]: ITopic;
  };
  topicIds: string[];
}

export interface IUpdateTopicPayload {
  id: string;
  updates: {
    title?: string;
    totalTime?: number;
    totalCount?: number;
  };
}