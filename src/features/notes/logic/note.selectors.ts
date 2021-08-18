import { createSelector } from "@reduxjs/toolkit";
import { INote } from "features/notes/logic/note.types";

import { TAppState } from "shared/redux/store";

const selectNoteState = (state: TAppState) => state.note;

export const selectNoteHash = createSelector(
  [selectNoteState],
  (state) => state.notes,
);

export const selectCurrentNoteIds = createSelector(
  [selectNoteState],
  (state) => state.currentNoteIds,
);

export const selectPreviousNoteIds = createSelector(
  [selectNoteState],
  (state) => state.previousNoteIds,
);

export const selectCurrentNotes = createSelector(
  [selectNoteHash, selectCurrentNoteIds],
  (hash, ids) => {
    const notes: INote[] = [];

    ids.forEach((id) => notes.push(hash[id]));

    return notes;
  },
);

export const selectPreviousNotes = createSelector(
  [selectNoteHash, selectPreviousNoteIds],
  (hash, ids) => {
    const notes: INote[] = [];

    ids.forEach((id) => notes.push(hash[id]));

    return notes;
  },
);
