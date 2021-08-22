import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { CONSUME_PAGE_NUMBERS } from "../routes/consume.routes";
import { useConsumeStore } from "../logic/consume.store";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useLocationStore } from "features/location/location.store";
import { allHookPrompts } from "features/hooks/data/hooks.data";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { CardButton } from "shared/components/button/card-button.component";
import { pluralizeString } from "shared/helpers/string.helpers";

export function ConsumeContinue() {
  const history = useHistory();
  const { currentStep } = useLocationStore();
  const { finishStudyBlock } = useConsumeStore();
  const { updateTotalHooksCompleted, completedIds } = useHookStore();

  const hooksCompleted = completedIds.size;
  const totalNumHooks = allHookPrompts.length;
  const percentCompleted = Math.round((hooksCompleted / totalNumHooks) * 100);

  function handleButtonClick() {
    updateTotalHooksCompleted();
    finishStudyBlock();
  }

  function handleNextStudyBlock() {
    handleButtonClick();
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.STUDY_START}`);
  }

  function handleDoneStudying() {
    handleButtonClick();
    history.push(`/consume/${currentStep + 1}`);
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
              : `You completed ${
                  completedIds.size
                } / ${totalNumHooks} ${pluralizeString(
                  "hook",
                  completedIds.size,
                )} (${percentCompleted}%) during this study block.`}
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
