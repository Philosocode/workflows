import { IConsumeState } from "./consume.types";

export const selectMaterialWord = (state: IConsumeState) => {
  return state.materialType === "reading" ? "Read" : "Watch";
};
