import { useHistory } from "react-router-dom";
import { Box, Tooltip } from "@chakra-ui/react";

import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { nextStudyBlock, newMaterial } from "consume/redux/consume.slice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { selectNextStep } from "step/step.slice";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { CardButton } from "shared/components/button/card-button.component";

export function ConsumeContinue() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const nextStep = useAppSelector(selectNextStep);
  const currentHooks = useAppSelector(selectCurrentHooks);

  function onNextStudyBlock() {
    dispatch(nextStudyBlock());
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.TIMER}`);
  }

  function onDoneStudying() {
    dispatch(nextStudyBlock());
    history.push(`/consume/${nextStep}`);
  }

  const message =
    currentHooks.length === 0 ? (
      <Box>You didn't create any hooks/notes during this study block.</Box>
    ) : (
      <Box>
        Well done! You created {currentHooks.length} hook(s) during this study
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
          <Box mt={theme.spacing.messageBoxSpacing}>
            Click on "Next Block" to continue studying your current material.
          </Box>
          <Box>Click on "New Material" to start fresh with a new material.</Box>
        </>
      }
    />
  );
}
