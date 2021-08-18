import { useHistory } from "react-router-dom";
import { Box, ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";

import { nextStudyBlock } from "consume/redux/consume.slice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectCurrentNotes } from "features/notes/logic/note.selectors";
import { selectNextStep } from "step/step.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { CardButton } from "shared/components/button/card-button.component";

export function ConsumeContinue() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const nextStep = useAppSelector(selectNextStep);
  const currentNotes = useAppSelector(selectCurrentNotes);

  function onNextStudyBlock() {
    dispatch(nextStudyBlock());
    history.push(`/consume/1`);
  }

  function onDoneStudying() {
    dispatch(nextStudyBlock());
    history.push(`/consume/${nextStep}`);
  }

  const message =
    currentNotes.length === 0 ? (
      <Box>You didn't create any hooks/notes during this study block.</Box>
    ) : (
      <Box>
        Well done! You created {currentNotes.length} hook(s) during this study
        block.
      </Box>
    );

  return (
    <ConsumeWorkflowStep
      buttons={
        <CardButtonGrid>
          <Tooltip
            label="This will take you to the study timer"
            hasArrow
            shouldWrapChildren
            placement="top"
          >
            <CardButton color="green" onClick={onNextStudyBlock}>
              Next Block
            </CardButton>
          </Tooltip>
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
