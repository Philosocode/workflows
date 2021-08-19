import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectStudyBlockCount } from "features/consume/redux/consume.selectors";
import { newMaterial } from "features/consume/redux/consume.slice";
import { selectNotes } from "features/notes/logic/note.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { NoteList } from "features/notes/components/note-list.component";
import { theme } from "shared/styles/theme";
import { useHookStore } from "features/hooks/logic/hook.store";

export function ConsumeFinish() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);
  const { resetHookState } = useHookStore();
  const studyBlockCount = useAppSelector(selectStudyBlockCount);

  function reset(nextUrl: string) {
    dispatch(newMaterial());
    resetHookState();

    history.push(nextUrl);
  }

  return (
    <>
      <ConsumeWorkflowStep
        buttons={
          <CardButtonGrid
            buttons={[
              {
                text: "New Material",
                onClick: () => reset("/consume/1"),
              },
              { text: "Go Home", onClick: () => reset("/") },
            ]}
          ></CardButtonGrid>
        }
        message={
          <>
            <Box>Here's a summary of your study session:</Box>
            <UnorderedList>
              <ListItem>
                {notes.length === 0
                  ? "You didn't create any notes"
                  : `You've created ${notes.length} note(s)`}
              </ListItem>
              <ListItem>
                You've completed {studyBlockCount} study block(s)
              </ListItem>
            </UnorderedList>
            {notes.length > 0 && (
              <Box mt={theme.spacing.messageBoxSpacing}>
                Make sure to save your notes somewhere. They'll be deleted once
                you leave this page.
              </Box>
            )}
          </>
        }
      ></ConsumeWorkflowStep>
      {notes.length > 0 && <NoteList heading="Notes" notes={notes} />}
    </>
  );
}
