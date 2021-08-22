import { SetState } from "zustand";
import produce from "immer";
import { omit } from "lodash";

import {
  INote,
  INoteActions,
  INoteState,
  INoteStore,
  IRepositionNote,
  IUpdateNote,
} from "./note.types";
import { initialState } from "./note.constants";

export function noteActions(set: SetState<INoteStore>): INoteActions {
  return {
    createNote: (note: INote) => {
      set(
        produce((state: INoteState) => {
          state.notes[note.id] = note;
          state.noteIds.unshift(note.id);
        }),
      );
    },
    updateNote: (payload: IUpdateNote) => {
      const { id, updates } = payload;

      set(
        produce((state: INoteState) => {
          state.notes[id] = {
            ...state.notes[id],
            ...updates,
          };
        }),
      );
    },
    deleteNote: (noteId: string) => {
      set(
        produce((state: INoteState) => {
          state.notes = omit(state.notes, [noteId]);
          state.noteIds = state.noteIds.filter((id) => id !== noteId);
        }),
      );
    },
    repositionNote: (indices: IRepositionNote) => {
      set(
        produce((state) => {
          const { oldIndex, newIndex } = indices;
          const [noteToReposition] = state.noteIds.splice(oldIndex, 1);

          state.noteIds.splice(newIndex, 0, noteToReposition);
        }),
      );
    },
    toggleAllNotes: () => {
      set(
        produce((state: INoteState) => {
          const allNotes = Object.values(state.notes);
          let allExpanded = allNotes.every((note) => note.isExpanded);

          // all notes are expanded, contract them all
          const newValue = allExpanded ? false : true;
          allNotes.forEach(
            (note) => (state.notes[note.id].isExpanded = newValue),
          );
        }),
      );
    },
    reset: () => set((state) => ({ ...state, ...initialState })),
  };
}
