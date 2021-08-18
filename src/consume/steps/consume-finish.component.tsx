import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import {
  selectMaterialType,
  selectStudyBlockCount,
  selectTotalStudyTime,
} from "consume/redux/consume.selectors";
import { newMaterial } from "consume/redux/consume.slice";
import { selectPreviousNotes } from "features/notes/logic/note.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { NoteList } from "features/notes/components/note-list.component";

export function ConsumeFinish() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const previousNotes = useAppSelector(selectPreviousNotes);
  const totalStudyTime = useAppSelector(selectTotalStudyTime);
  const studyBlockCount = useAppSelector(selectStudyBlockCount);
  const materialType = useAppSelector(selectMaterialType);

  const word = materialType === "reading" ? "read" : "watched";

  function reset(nextUrl: string) {
    dispatch(newMaterial());
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
                {previousNotes.length === 0
                  ? "You didn't create any notes"
                  : `You've created ${previousNotes.length} note(s)`}
              </ListItem>
              <ListItem>
                You've completed {studyBlockCount} study block(s)
              </ListItem>
              <ListItem>
                You've {word} for about {totalStudyTime} minute(s)
              </ListItem>
            </UnorderedList>
          </>
        }
      ></ConsumeWorkflowStep>
      {previousNotes.length > 0 && (
        <NoteList heading="All Notes" notes={previousNotes} />
      )}
    </>
  );
}
