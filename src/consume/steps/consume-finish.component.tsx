import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { nextStudyBlock, newMaterial } from "consume/redux/consume.slice";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectCurrentHooks } from "hook/redux/hook.selectors";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Message } from "message/components/message.component";

export function ConsumeFinish() {
  const dispatch = useAppDispatch();
  const currentHooks = useAppSelector(selectCurrentHooks);
  const [redirectUrl, setRedirectUrl] = useState("");

  function onNextStudyBlock() {
    dispatch(nextStudyBlock());
    setRedirectUrl(`/consume/${CONSUME_PAGE_NUMBERS.TIMER}`);
  }

  function onNewMaterial() {
    dispatch(newMaterial());
    setRedirectUrl("/consume/0");
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
    <>
      {redirectUrl && <Redirect to={redirectUrl} />}
      <Message>
        {message}
        <Box mt={theme.spacing.messageBoxSpacing}>
          Click on "Next Block" to continue studying your current material.
        </Box>
        <Box>Click on "New Material" to start fresh with a new material.</Box>
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
