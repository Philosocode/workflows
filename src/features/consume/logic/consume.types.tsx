export type TMaterialType = "reading" | "watching";

export interface IConsumeState {
  materialType: TMaterialType;
  studyBlockCount: number;
}

export interface IConsumeActions {
  finishStudyBlock: () => void;
  setMaterialType: (type: TMaterialType) => void;
  reset: () => void;
}

export interface IConsumeStore extends IConsumeState, IConsumeActions {}
