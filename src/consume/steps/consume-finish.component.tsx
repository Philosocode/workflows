import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { nextStudyBlock, newMaterial } from "consume/redux/consume.slice";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/redux/store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Message } from "message/components/message.component";
import { Box, VStack } from "@chakra-ui/react";
import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { theme } from "shared/styles/theme";

export function ConsumeFinish() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const currentHooks = useAppSelector(selectCurrentHooks);

  function onNextStudyBlock() {
    dispatch(nextStudyBlock());
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.TIMER}`);
  }

  function onNewMaterial() {
    dispatch(newMaterial());
    history.push("/consume/setup");
  }

  const message =
    currentHooks.length === 0 ? (
      <Box>You didn't create any hooks/notes during this study block.</Box>
    ) : (
      <Box>
        Well done! You created {currentHooks.length} hooks/notes during this
        study block.
      </Box>
    );

  return (
    <>
      <Message>
        <VStack spacing={theme.spacing.messageBoxSpacing} alignItems="start">
          {message}
          <Box>
            Click on "Next Block" to continue studying your current material.
          </Box>
          <Box>Click on "New Material" to start fresh with a new material.</Box>
        </VStack>
      </Message>
      <CardButtonGrid>
        <CardButton color="green" onClick={onNextStudyBlock}>
          Next Block
        </CardButton>
        <CardButton onClick={onNewMaterial}>New Material</CardButton>
      </CardButtonGrid>
    </>
  );
}
