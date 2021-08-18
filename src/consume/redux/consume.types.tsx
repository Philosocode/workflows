export type TMaterialType = "reading" | "writing";

export interface IConsumeState {
  materialType: TMaterialType;
  studyBlockCount: number;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
  totalStudyTime: number;
}

export interface ISetMaterialDataPayload {
  materialType: TMaterialType;
}

export interface IUpdateSettingsPayload {
  studyBlockTime?: number;
  shouldPlayAlarm?: boolean;
}
