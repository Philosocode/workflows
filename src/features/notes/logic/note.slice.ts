import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import omit from "lodash/omit";

import { nextStudyBlock } from "consume/redux/consume.slice";
import {
  INote,
  INoteState,
  IRepositionNotePayload,
  IUpdateNotePayload,
} from "./note.types";

const initialState: INoteState = {
  notes: {},
  currentNoteIds: [],
  previousNoteIds: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<INote>) => {
      const newNote = { ...action.payload };

      state.notes[newNote.id] = newNote;
      state.currentNoteIds.unshift(newNote.id);
    },
    updateNote: (state, action: PayloadAction<IUpdateNotePayload>) => {
      const { id, updates } = action.payload;

      state.notes[id] = {
        ...state.notes[id],
        ...updates,
      };
    },
    repositionNote: (state, action: PayloadAction<IRepositionNotePayload>) => {
      const { oldIndex, newIndex, isPrevious } = action.payload;

      const noteIds = isPrevious ? state.previousNoteIds : state.currentNoteIds;
      const [noteToReposition] = noteIds.splice(oldIndex, 1);

      noteIds.splice(newIndex, 0, noteToReposition);
    },
    deleteNote: (state, action) => {
      const isPrevious = state.previousNoteIds.includes(action.payload);

      state.notes = omit(state.notes, [action.payload]);

      if (isPrevious) {
        state.previousNoteIds = state.previousNoteIds.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.currentNoteIds = state.currentNoteIds.filter(
          (id) => id !== action.payload,
        );
      }
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
    builder.addCase(nextStudyBlock, (state) => {
      // move current note ids into previous
      state.previousNoteIds.unshift(...state.currentNoteIds);
      state.currentNoteIds = [];
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
