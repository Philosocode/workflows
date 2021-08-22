import { FaBook, FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { EXP_RATES } from "features/game/logic/game.constants";
import { useAppSelector } from "shared/redux/store";
import { useGameStore } from "features/game/logic/game.store";
import { useConsumeStore } from "../logic/consume.store";
import { useHookStore } from "features/hooks/logic/hook.store";
import { selectNotes } from "features/notes/logic/note.selectors";
import { theme } from "shared/styles/theme";
import { pluralizeString } from "shared/helpers/string.helpers";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { NoteList } from "features/notes/components/note-list.component";

export function ConsumeFinish() {
  const history = useHistory();
  const notes = useAppSelector(selectNotes);
  const { addExp } = useGameStore();
  const { totalHooksCompleted, reset: resetHookStore } = useHookStore();
  const { studyBlockCount, reset: resetConsume } = useConsumeStore();

  const hooksExp = Math.round(totalHooksCompleted * EXP_RATES.hook);
  const notesExp = notes.length * EXP_RATES.note;
  const blocksExp = studyBlockCount * EXP_RATES.studyBlocks;
  const totalExp = hooksExp + notesExp + blocksExp;

  function handleReset(nextUrl: string) {
    resetConsume();
    addExp(totalExp);
    resetHookStore();

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
                onClick: () => handleReset("/consume/1"),
                icon: FaBook,
              },
              {
                text: "Go Home",
                onClick: () => handleReset("/"),
                icon: FaHome,
              },
            ]}
          ></CardButtonGrid>
        }
        message={
          <>
            <Box>Here's a summary of your study session:</Box>
            <UnorderedList>
              <ListItem>
                {totalHooksCompleted === 0
                  ? "You didn't create any hooks"
                  : `You created ${totalHooksCompleted} ${pluralizeString(
                      "hook",
                      totalHooksCompleted,
                    )} (+${hooksExp} exp)`}
              </ListItem>
              <ListItem>
                {notes.length === 0
                  ? "You didn't create any notes"
                  : `You created ${notes.length} ${pluralizeString(
                      "note",
                      notes.length,
                    )} (+${notesExp} exp)`}
              </ListItem>
              <ListItem>
                {studyBlockCount === 0
                  ? "You didn't complete any study blocks"
                  : `You've completed ${studyBlockCount} study
                ${pluralizeString(
                  "block",
                  studyBlockCount,
                )} (+${blocksExp} exp)`}
              </ListItem>
              <ListItem>In total, you've gained {totalExp} exp</ListItem>
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
