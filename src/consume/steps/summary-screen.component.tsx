import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Link } from "typography/components/link.component";
import { Messages } from "message/components/messages.component";
import { Redirect } from "react-router-dom";
import { selectCurrentNotes } from "features/notes/logic/note.selectors";
import { NoteList } from "features/notes/components/note-list.component";

export function SummaryScreen() {
  const nextStep = useAppSelector(selectNextStep);
  const currentNotes = useAppSelector(selectCurrentNotes);

  if (currentNotes.length === 0)
    return <Redirect to={`/consume/${nextStep}`} />;

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
        <NoteList notes={currentNotes} heading="Current Notes" dragDisabled />
      </Box>
    </>
  );
}
