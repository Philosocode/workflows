export type TMaterialType = "reading" | "writing";

export interface IConsumeState {
  materialType: TMaterialType;
  studyBlockCount: number;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}

export interface ISetMaterialDataPayload {
  materialType: TMaterialType;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}

export interface IUpdateSettingsPayload {
  studyBlockTime?: number;
  shouldPlayAlarm?: boolean;
}
