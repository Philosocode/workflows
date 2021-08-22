import { INoteState } from "./note.types";

export const initialState: INoteState = {
  notes: {},
  noteIds: [],
  notesCreatedDuringBlock: 0,
};
