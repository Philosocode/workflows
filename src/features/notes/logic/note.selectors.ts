import { createSelector } from "@reduxjs/toolkit";
import { INote } from "features/notes/logic/note.types";

import { TAppState } from "shared/redux/store";

const selectNoteState = (state: TAppState) => state.note;

export const selectNoteHash = createSelector(
  [selectNoteState],
  (state) => state.notes,
);

export const selectNoteIds = createSelector(
  [selectNoteState],
  (state) => state.noteIds,
);

export const selectNotes = createSelector(
  [selectNoteHash, selectNoteIds],
  (hash, ids) => {
    const notes: INote[] = [];

    ids.forEach((id) => notes.push(hash[id]));

    return notes;
  },
);
