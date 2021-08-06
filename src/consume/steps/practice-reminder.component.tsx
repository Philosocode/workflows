import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useAppSelector } from "shared/redux/store";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Redirect } from "react-router-dom";

export function PracticeReminder() {
  const [firstTime, setFirstTime] = useState<boolean>();
  const nextStep = useAppSelector(selectNextStep);

  if (firstTime === false) return <Redirect to={`/consume/${nextStep}`} />;

  return (
    <ConsumeWorkflowStep
      showButton={firstTime === true}
      message={
        <Messages>
          <Box>Is this your first time encountering this subject or topic?</Box>
          {firstTime && (
            <Messages>
              <Box>Great! Find some practice problems and do them.</Box>
              <Box fontSize={theme.typography.fontSize.messageAside}>
                You might be thinking, "I don't know anything about this
                subject!"
                <br />
                That's okay! Even if you get all the questions wrong, it
                prepares your mind to learn the new information.
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
