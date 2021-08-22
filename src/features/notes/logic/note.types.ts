export interface INote {
  content: string;
  id: string;
  title: string;
  isExpanded: boolean;
}

export interface IUpdateNote {
  id: string;
  updates: {
    title?: string;
    content?: string;
    isExpanded?: boolean;
  };
}
export interface IRepositionNote {
  oldIndex: number;
  newIndex: number;
}

export interface INoteState {
  notes: {
    [key: string]: INote;
  };
  noteIds: string[];
  notesCreatedDuringBlock: number;
}

export interface INoteActions {
  createNote: (note: INote) => void;
  updateNote: (updates: IUpdateNote) => void;
  repositionNote: (indices: IRepositionNote) => void;
  deleteNote: (noteId: string) => void;
  toggleAllNotes: () => void;
  reset: () => void;
}

export interface INoteStore extends INoteState, INoteActions {}
