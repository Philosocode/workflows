import create from "zustand";

import { initialState } from "./note.constants";
import { noteActions } from "./note.actions";
import { INoteStore } from "./note.types";

export const useNoteStore = create<INoteStore>((set) => ({
  ...initialState,
  ...noteActions(set),
}));
