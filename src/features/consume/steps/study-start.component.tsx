import { Box, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useConsumeStore } from "../logic/consume.store";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { theme } from "shared/styles/theme";
import { minutesToMs } from "shared/helpers/time.helpers";
import { useLocationStore } from "features/location/location.store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Messages } from "shared/components/message/messages.component";
import { CountdownTimer } from "features/timer/components/countdown-timer.component";

export function StudyStart() {
  const history = useHistory();
  const { materialType, studyBlockCount } = useConsumeStore();
  const [timerFinished, toggleTimer] = useToggle();
  const { currentStep } = useLocationStore();

  return (
    <ConsumeWorkflowStep
      showButton={timerFinished}
      buttonProps={{ mt: theme.spacing.workflowStepButtonSpacing }}
      message={
        <Messages>
          {materialType === "reading" ? (
            <Box>Read for a few minutes (1-2 paragraphs, 1 page, etc).</Box>
          ) : (
            <Box>Watch for a few minutes.</Box>
          )}
          <Box>
            For now, {}
            <Text display="inline-block" fontWeight="semibold">
              don't take any notes.
            </Text>
            {} Focus completely on understanding the material.
          </Box>
        </Messages>
      }
    >
      <CountdownTimer
        durationInMs={minutesToMs(2)}
        startAutomatically={studyBlockCount > 0}
        handleNext={toggleTimer}
        handleSkip={() => history.push(`/consume/${currentStep + 1}`)}
      />
    </ConsumeWorkflowStep>
  );
}
