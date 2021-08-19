export type TMaterialType = "reading" | "watching";

export interface IConsumeState {
  materialType: TMaterialType;
  studyBlockCount: number;
  studyBlockTime: number;
  totalStudyTime: number;
}

export interface ISetMaterialDataPayload {
  materialType: TMaterialType;
}

export interface IUpdateSettingsPayload {
  studyBlockTime?: number;
  shouldPlayAlarm?: boolean;
}
