import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { selectCurrentStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Timer } from "timer/components/timer.component";
import { theme } from "shared/styles/theme";
import { RandoHookCard } from "hook/components/rando-hook-card.component";

export function StudyTimer() {
  const history = useHistory();
  const { materialType, studyBlockTime, shouldPlayAlarm } =
    useAppSelector(selectConsumeState);
  const currentStep = useAppSelector(selectCurrentStep);
  const word = materialType === "reading" ? "read" : "watch";

  return (
    <ConsumeWorkflowStep
      showButton={false}
      message={
        <>
          <Box>
            Don't take any notes. For now, focus on completely understanding the
            material.
          </Box>
          <Box mt={theme.spacing.messageBoxSpacing}>
            Regularly stop, think, and ask yourself questions about what you're{" "}
            {word}ing.
          </Box>
        </>
      }
    >
      <RandoHookCard />
      <Timer
        duration={studyBlockTime}
        onNext={() => history.push(`/consume/${currentStep + 1}`)}
        startAutomatically={false}
        shouldPlayAlarm={shouldPlayAlarm}
        showSkipButton={true}
      />
    </ConsumeWorkflowStep>
  );
}
