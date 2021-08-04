import { Box } from "@chakra-ui/react";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { Link } from "typography/components/link.component";

export function TimerReminder() {
  return (
    <ConsumeWorkflowStep
      message={
        <Messages>
          <Box>
            Start a Pomodoro timer. Use a site like {}
            <Link href="https://pomofocus.io" isExternal>
              pomofocus.io.
            </Link>
          </Box>
          <Box>
            To learn more about the Pomodoro method, check out {}
            <Link
              href="https://todoist.com/productivity-methods/pomodoro-technique"
              isExternal
            >
              this link.
            </Link>
          </Box>
        </Messages>
      }
    />
  );
}
