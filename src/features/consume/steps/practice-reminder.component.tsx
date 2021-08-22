import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useLocationStore } from "features/location/location.store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Messages } from "shared/components/message/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { Link } from "shared/components/typography/link.component";

export function PracticeReminder() {
  const [firstTime, toggleFirstTime] = useToggle();
  const { currentStep } = useLocationStore();

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
            { text: "No", to: `/consume/${currentStep + 1}` },
          ]}
        />
      )}
    </ConsumeWorkflowStep>
  );
}
