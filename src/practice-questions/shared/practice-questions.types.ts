export type TPracticeMode = "numQuestions" | "timer";

export interface IPracticeQuestionsState {
  amount: {
    min: number;
    max: number;
  };
  practiceMode: TPracticeMode;
}
