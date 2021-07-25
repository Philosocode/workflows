export type TMaterialType = "reading" | "writing";

export interface IConsumeState {
  materialName: string;
  materialType: TMaterialType;
  step: number;
}

export interface IStepOnePayload {
  materialName: string;
  materialType: TMaterialType;
}