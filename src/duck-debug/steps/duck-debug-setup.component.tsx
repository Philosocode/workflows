import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useAppDispatch } from "shared/redux/store";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.routes";
import { setRedirectUrl } from "step/step.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { Messages } from "message/components/messages.component";

export function DuckDebugSetup() {
  const dispatch = useAppDispatch();
  const location = useLocation<{ from: string }>();

  useEffect(() => {
    if (location.state?.from) {
      dispatch(setRedirectUrl(location.state?.from));
    }
  }, [dispatch, location.state]);

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
        <CardButtonGrid
          buttons={[
            { text: "Yes", to: `${DUCK_DEBUG_BASE_PATH}/prog/2` },
            { text: "No", to: `${DUCK_DEBUG_BASE_PATH}/regular/2` },
          ]}
        />
      }
    />
  );
}
