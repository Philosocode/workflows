export type TMaterialType = "reading" | "writing";
export type TStudyView = "study" | "menu" | "hooks" | "notes" | "help";

export interface IConsumeState {
  materialName: string;
  materialType: TMaterialType;
  step: number;
}

export interface IStepOnePayload {
  materialName: string;
  materialType: TMaterialType;
}
