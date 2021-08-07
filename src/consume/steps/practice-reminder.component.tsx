import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useAppSelector } from "shared/redux/store";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Link } from "typography/components/link.component";

export function PracticeReminder() {
  const [firstTime, setFirstTime] = useState<boolean>();
  const nextStep = useAppSelector(selectNextStep);

  if (firstTime === false) return <Redirect to={`/consume/${nextStep}`} />;

  return (
    <ConsumeWorkflowStep
      showButton={firstTime === true}
      message={
        <Messages>
          {firstTime === undefined && (
            <Box>
              Is this your first time encountering this subject or topic?
            </Box>
          )}
          {firstTime && (
            <Messages>
              <Box>
                Great! Find some practice problems and do them. It's okay if you
                have no idea and get all the questions wrong. Try your best.
              </Box>
              <Box fontSize={theme.typography.fontSize.messageAside}>
                This strategy is called "generation". You can learn more by
                reading {}
                <Link href="https://betterhumans.pub/how-to-unlock-the-amazing-power-of-your-brain-and-become-a-top-student-369e5ba59484#6b3d">
                  this article.
                </Link>
              </Box>
            </Messages>
          )}
        </Messages>
      }
    >
      {!firstTime && (
        <CardButtonGrid mt={theme.spacing.workflowStepButtonSpacing}>
          <CardButton onClick={() => setFirstTime(true)}>Yes</CardButton>
          <CardButton onClick={() => setFirstTime(false)}>No</CardButton>
        </CardButtonGrid>
      )}
    </ConsumeWorkflowStep>
  );
}
