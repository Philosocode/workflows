import { NoteList } from "features/notes/components/note-list.component";
import {
  selectCurrentNotes,
  selectPreviousNotes,
} from "features/notes/logic/note.selectors";
import { useAppSelector } from "shared/redux/store";
import { ExpandNotesButton } from "./expand-notes-button.component";

interface IProps {
  showPrevious?: boolean;
}
export function StudyFooter(props: IProps) {
  const currentNotes = useAppSelector(selectCurrentNotes);
  const previousNotes = useAppSelector(selectPreviousNotes);

  const hasCurrentNotes = currentNotes.length > 0;
  const hasPreviousNotes = previousNotes.length > 0;

  function shouldShowExpandButton() {
    if (hasCurrentNotes) return true;
    if (hasPreviousNotes && props.showPrevious) return true;

    return false;
  }

  return (
    <>
      {hasCurrentNotes && (
        <NoteList notes={currentNotes} heading="Current Notes" />
      )}

      {props.showPrevious && hasPreviousNotes && (
        <NoteList notes={previousNotes} heading="Previous Notes" isPrevious />
      )}

      {shouldShowExpandButton() && <ExpandNotesButton />}
    </>
  );
}
