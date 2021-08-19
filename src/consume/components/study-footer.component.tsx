import { NoteList } from "features/notes/components/note-list.component";
import { selectNotes } from "features/notes/logic/note.selectors";
import { useAppSelector } from "shared/redux/store";
import { ExpandNotesButton } from "./expand-notes-button.component";

export function StudyFooter() {
  const notes = useAppSelector(selectNotes);
  const hasNotes = notes.length > 0;

  if (!hasNotes) return null;

  return (
    <>
      <NoteList notes={notes} heading="Notes" />
      <ExpandNotesButton />
    </>
  );
}
