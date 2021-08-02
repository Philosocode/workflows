export type TMaterialType = "reading" | "writing";
export type TStudyView = "menu" | "hooks" | "notes" | "help";

export interface IConsumeState {
  materialType: TMaterialType;
  step: number;
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
