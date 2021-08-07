import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useAppSelector } from "shared/redux/store";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { Link } from "typography/components/link.component";

export function PracticeReminder() {
  const [firstTime, toggleFirstTime] = useToggle();
  const nextStep = useAppSelector(selectNextStep);

  return (
    <ConsumeWorkflowStep
      showButton={firstTime === true}
      message={
        <Messages>
          {!firstTime && (
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
        <CardButtonGrid
          mt={theme.spacing.workflowStepButtonSpacing}
          buttons={[
            { text: "Yes", onClick: toggleFirstTime },
            { text: "No", to: `/consume/${nextStep}` },
          ]}
        />
      )}
    </ConsumeWorkflowStep>
  );
}
