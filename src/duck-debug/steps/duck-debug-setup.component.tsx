import { Box } from "@chakra-ui/react";

import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.routes";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { Messages } from "message/components/messages.component";

export function DuckDebugSetup() {
  return (
    <DuckDebugWorkflowStep
      editor={{ showEditor: false }}
      message={
        <Messages>
          <Box>
            Just one question before we start. Do you need help with
            programming?
          </Box>
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
