import { Box } from "@chakra-ui/react";

import { Messages } from "message/components/messages.component";
import { quackers } from "avatars/data/quackers.avatar";
import { WorkflowStep } from "shared/components/step/workflow-step.component";

export function DuckDebugSetup() {
  return (
    <WorkflowStep
      onNext={() => {}}
      message={
        <Messages>
          <Box>
            Hi, I'm Mr. Quackers, the rubber duck. I'm here to help you get
            un-stuck!
          </Box>
          <Box>Just one question. Do you need help with programming?</Box>
        </Messages>
      }
      messageProps={{ avatar: quackers }}
    ></WorkflowStep>
  );
}
