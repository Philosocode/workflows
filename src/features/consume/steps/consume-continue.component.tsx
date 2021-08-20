import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { CONSUME_PAGE_NUMBERS } from "../routes/consume.routes";
import { nextStudyBlock } from "features/consume/redux/consume.slice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectNextStep } from "features/step/step.slice";
import { useHookStore } from "features/hooks/logic/hook.store";
import { allHookPrompts } from "features/hooks/data/hooks.data";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { CardButton } from "shared/components/button/card-button.component";

export function ConsumeContinue() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const nextStep = useAppSelector(selectNextStep);

  const { updateTotalHooksCompleted, completedIds } = useHookStore();

  const hooksCompleted = completedIds.size;
  const totalNumHooks = allHookPrompts.length;
  const percentCompleted = Math.round((hooksCompleted / totalNumHooks) * 100);

  function handleButtonClick() {
    updateTotalHooksCompleted();
    dispatch(nextStudyBlock());
  }

  function handleNextStudyBlock() {
    handleButtonClick();
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.STUDY_START}`);
  }

  function handleDoneStudying() {
    handleButtonClick();
    history.push(`/consume/${nextStep}`);
  }

  return (
    <ConsumeWorkflowStep
      buttons={
        <CardButtonGrid>
          <CardButton color="green" onClick={handleNextStudyBlock}>
            Next Block
          </CardButton>
          <CardButton onClick={handleDoneStudying}>Done Studying</CardButton>
        </CardButtonGrid>
      }
      message={
        <>
          <Box>
            {completedIds.size === 0
              ? "You didn't complete any hooks during this study block."
              : `You completed ${completedIds.size} / ${totalNumHooks} hooks (${percentCompleted}%) during this study block.`}
          </Box>
          <UnorderedList>
            <ListItem mt={theme.spacing.messageBoxSpacing}>
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
