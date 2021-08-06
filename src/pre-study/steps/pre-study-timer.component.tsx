import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { Messages } from "message/components/messages.component";
import { Link } from "typography/components/link.component";
import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";

export function PreStudyTimer() {
  return (
    <PreStudyWorkflowStep
      message={
        <Messages>
          <Box>
            Start a study timer (preferably a Pomodoro timer). Use a site like{" "}
            <Link href="https://pomofocus.io" isExternal>
              pomofocus.io.
            </Link>
          </Box>
          <Box fontSize={theme.typography.fontSize.messageAside}>
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
