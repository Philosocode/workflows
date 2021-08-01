export type TMaterialType = "reading" | "writing";
export type TStudyView = "study" | "menu" | "hooks" | "notes" | "help";

export interface IConsumeState {
  materialType: TMaterialType;
  step: number;
  studyBlockCount: number;
  studyBlockTime: number;
}

export interface IStepOnePayload {
  materialType: TMaterialType;
  studyBlockTime: number;
}
