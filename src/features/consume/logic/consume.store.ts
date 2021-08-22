import create from "zustand";
import { consumeActions } from "./consume.actions";
import { IConsumeState, IConsumeStore } from "./consume.types";

export const initialState: IConsumeState = {
  materialType: "reading",
  studyBlockCount: 0,
};

export const useConsumeStore = create<IConsumeStore>((set) => ({
  ...initialState,
  ...consumeActions(set),
}));
