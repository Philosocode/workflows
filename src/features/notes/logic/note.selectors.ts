import { INote, INoteState } from "./note.types";

export const selectNoteList = (state: INoteState) => {
  const notes: INote[] = [];

  state.noteIds.forEach((id) => notes.push(state.notes[id]));

  return notes;
};
