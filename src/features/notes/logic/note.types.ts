export interface INote {
  content: string;
  id: string;
  title: string;
  isExpanded: boolean;
}

export interface INoteState {
  notes: {
    [key: string]: INote;
  };
  currentNoteIds: string[];
  previousNoteIds: string[];
}

// Actions
export interface IUpdateNotePayload {
  id: string;
  updates: {
    title?: string;
    content?: string;
    isExpanded?: boolean;
  };
}
export interface IRepositionNotePayload {
  oldIndex: number;
  newIndex: number;
  isPrevious: boolean;
}
