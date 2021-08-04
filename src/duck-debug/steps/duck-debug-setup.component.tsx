import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Redirect, useLocation } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import { setRedirectUrl } from "duck-debug/redux/duck-debug.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.route";

export function DuckDebugSetup() {
  const dispatch = useAppDispatch();
  const location = useLocation<{ from: string }>();

  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    if (location.state?.from) {
      dispatch(setRedirectUrl(location.state?.from));
    }
  }, [dispatch, location.state]);

  if (nextUrl) return <Redirect to={nextUrl} />;
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
          <CardButton
            color="gray"
            onClick={() => setNextUrl(`${DUCK_DEBUG_BASE_PATH}/prog/1`)}
          >
            Yes
          </CardButton>
          <CardButton
            color="gray"
            onClick={() => setNextUrl(`${DUCK_DEBUG_BASE_PATH}/regular/1`)}
          >
            No
          </CardButton>
        </CardButtonGrid>
      }
    />
  );
}
