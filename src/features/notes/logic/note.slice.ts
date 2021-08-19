import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import omit from "lodash/omit";

import { newMaterial, nextStudyBlock } from "consume/redux/consume.slice";
import {
  INote,
  INoteState,
  IRepositionNotePayload,
  IUpdateNotePayload,
} from "./note.types";

const initialState: INoteState = {
  notes: {},
  noteIds: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<INote>) => {
      const newNote = { ...action.payload };

      state.notes[newNote.id] = newNote;
      state.noteIds.unshift(newNote.id);
    },
    updateNote: (state, action: PayloadAction<IUpdateNotePayload>) => {
      const { id, updates } = action.payload;

      state.notes[id] = {
        ...state.notes[id],
        ...updates,
      };
    },
    repositionNote: (state, action: PayloadAction<IRepositionNotePayload>) => {
      const { oldIndex, newIndex } = action.payload;

      const [noteToReposition] = state.noteIds.splice(oldIndex, 1);

      state.noteIds.splice(newIndex, 0, noteToReposition);
    },
    deleteNote: (state, action) => {
      state.notes = omit(state.notes, [action.payload]);
      state.noteIds = state.noteIds.filter((id) => id !== action.payload);
    },
    toggleAllNotes: (state) => {
      const allNotes = Object.values(state.notes);
      let allExpanded = allNotes.every((note) => note.isExpanded);

      // contract if all notes are expanded
      const newValue = allExpanded ? false : true;
      allNotes.forEach((note) => (state.notes[note.id].isExpanded = newValue));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newMaterial, () => {
      return initialState;
    });
  },
});

export const noteReducer = noteSlice.reducer;
export const {
  createNote,
  updateNote,
  deleteNote,
  repositionNote,
  toggleAllNotes,
} = noteSlice.actions;
