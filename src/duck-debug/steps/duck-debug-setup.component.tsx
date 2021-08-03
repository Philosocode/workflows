import { Box } from "@chakra-ui/react";

import { Messages } from "message/components/messages.component";
import { DuckDebugStep } from "./duck-debug-step.component";

export function DuckDebugSetup() {
  return (
    <DuckDebugStep
      message={
        <Messages>
          <Box>
            Hi, I'm Mr. Quackers, the rubber duck. I'm here to help you get
            un-stuck!
          </Box>
          <Box>Just one question. Do you need help with programming?</Box>
        </Messages>
      }
    ></DuckDebugStep>
  );
}
