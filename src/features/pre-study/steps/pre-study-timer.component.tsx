import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { Messages } from "shared/components/message/messages.component";
import { Link } from "shared/components/typography/link.component";
import { PreStudyWorkflowStep } from "features/pre-study/components/pre-study-workflow-step.component";

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
          <Box>
            You can also use the stopwatch by clicking on the clock icon in the
            top-right corner of the screen.
          </Box>
          <Box>
            The stopwatch will run in the background, even if you close the
            window.
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
