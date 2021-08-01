import { Box } from "@chakra-ui/react";

import { ConsumeMessageButtonStep } from "consume/components/consume-message-button-step.component";
import { Link } from "typography/components/link.component";

export function TimerReminder() {
  return (
    <ConsumeMessageButtonStep>
      <Box>
        Start a Pomodoro timer. Use a site like {}
        <Link href="https://pomofocus.io" isExternal>
          pomofocus.io.
        </Link>
      </Box>
      <Box pt={10}>
        To learn more about the Pomodoro method, check out {}
        <Link
          href="https://todoist.com/productivity-methods/pomodoro-technique"
          isExternal
        >
          this link.
        </Link>
      </Box>
    </ConsumeMessageButtonStep>
  );
}
