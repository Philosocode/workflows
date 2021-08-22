import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { selectNoteList } from "features/notes/logic/note.selectors";
import { useNoteStore } from "features/notes/logic/note.store";
import { useLocationStore } from "features/location/location.store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Link } from "shared/components/typography/link.component";
import { Messages } from "shared/components/message/messages.component";
import { Redirect } from "react-router-dom";
import { NoteList } from "features/notes/components/note-list.component";

export function FlashcardsReminder() {
  const { currentStep } = useLocationStore();
  const notes = useNoteStore(selectNoteList);

  if (notes.length === 0)
    return <Redirect to={`/consume/${currentStep + 1}`} />;

  return (
    <>
      <ConsumeWorkflowStep
        message={
          <Messages>
            <Box>
              Look at your note(s) below. Is there anything you want to remember
              in the long-term?
            </Box>
            <Box>
              Create flashcards using tools like {}
              <Link href="https://apps.ankiweb.net/">Anki</Link> or {}
              <Link href="https://quizlet.com/">Quizlet</Link>.
            </Box>
            <Box fontSize={theme.typography.fontSize.messageAside}>
              For tips on creating effective flashcards, {}
              <Link href="https://www.supermemo.com/en/archives1990-2015/articles/20rules">
                visit this website.
              </Link>
            </Box>
          </Messages>
        }
      />
      <Box w="full">
        <NoteList notes={notes} heading="Notes" dragDisabled />
      </Box>
    </>
  );
}
