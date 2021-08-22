import { NoteList } from "features/notes/components/note-list.component";
import { ExpandNotesButton } from "./expand-notes-button.component";

import { selectNoteList } from "features/notes/logic/note.selectors";
import { useNoteStore } from "features/notes/logic/note.store";

export function StudyFooter() {
  const notes = useNoteStore(selectNoteList);
  const hasNotes = notes.length > 0;

  if (!hasNotes) return null;
  return (
    <>
      <NoteList notes={notes} heading="Notes" />
      <ExpandNotesButton />
    </>
  );
}
