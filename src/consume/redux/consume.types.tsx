export type TMaterialType = "reading" | "writing";
export type TStudyView = "timer" | "menu" | "hooks" | "notes" | "help";

export interface IConsumeState {
  materialType: TMaterialType;
  step: number;
  studyBlockCount: number;
  studyBlockTime: number;
}

export interface ISetMaterialDataPayload {
  materialType: TMaterialType;
  studyBlockTime: number;
}
