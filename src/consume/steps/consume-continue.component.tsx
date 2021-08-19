import { useHistory } from "react-router-dom";
import { Box, ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";

import { nextStudyBlock } from "consume/redux/consume.slice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectNextStep } from "step/step.slice";
import { selectNotes } from "features/notes/logic/note.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { CardButton } from "shared/components/button/card-button.component";

export function ConsumeContinue() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const nextStep = useAppSelector(selectNextStep);
  const notes = useAppSelector(selectNotes);

  function onNextStudyBlock() {
    dispatch(nextStudyBlock());
    history.push(`/consume/1`);
  }

  function onDoneStudying() {
    dispatch(nextStudyBlock());
    history.push(`/consume/${nextStep}`);
  }

  const message =
    notes.length === 0 ? (
      <Box>You didn't create any notes during this study block.</Box>
    ) : (
      <Box>
        Well done! You created {notes.length} note(s) during this study block.
      </Box>
    );

  return (
    <ConsumeWorkflowStep
      buttons={
        <CardButtonGrid>
          <CardButton color="green" onClick={onNextStudyBlock}>
            Next Block
          </CardButton>
          <CardButton onClick={onDoneStudying}>Done Studying</CardButton>
        </CardButtonGrid>
      }
      message={
        <>
          {message}
          <UnorderedList>
            <ListItem>
              Choose "Next Block" to continue studying your current material.
            </ListItem>
            <ListItem>
              Choose "Done Studying" to finish your current studying session.
            </ListItem>
          </UnorderedList>
        </>
      }
    />
  );
}
