import { Box } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import {
  setIsProgrammer,
  setRedirectUrl,
} from "duck-debug/redux/duck-debug.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.route";
import { useEffect } from "react";

export function DuckDebugSetup() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation<{ from: string }>();

  useEffect(() => {
    if (location.state?.from) {
      dispatch(setRedirectUrl(location.state?.from));
    }
  }, [dispatch, location.state]);

  function onClick(isProgrammer: boolean) {
    dispatch(setIsProgrammer(isProgrammer));
    const nextUrl = isProgrammer
      ? `${DUCK_DEBUG_BASE_PATH}/2/prog`
      : `${DUCK_DEBUG_BASE_PATH}/2/regular`;

    history.push(nextUrl);
  }

  return (
    <DuckDebugWorkflowStep
      editor={{ showEditor: false }}
      message={
        <Messages>
          <Box>
            Hi, I'm Mr. Quackers, the rubber duck. I'm here to help you get
            un-stuck!
          </Box>
          <Box>Just one question. Do you need help with programming?</Box>
        </Messages>
      }
      buttons={
        <CardButtonGrid mt={10}>
          <CardButton color="gray" onClick={() => onClick(true)}>
            Yes
          </CardButton>
          <CardButton color="gray" onClick={() => onClick(false)}>
            No
          </CardButton>
        </CardButtonGrid>
      }
    />
  );
}
