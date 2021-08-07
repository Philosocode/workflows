import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { selectCurrentStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Timer } from "timer/components/timer.component";
import { theme } from "shared/styles/theme";

export function StudyTimer() {
  const history = useHistory();
  const { materialType, studyBlockTime } = useAppSelector(selectConsumeState);
  const currentStep = useAppSelector(selectCurrentStep);

  const studyMessage =
    materialType === "reading"
      ? `Read for ${studyBlockTime} minute(s). Depending on the material, this may be a few paragraphs, or 1-2 pages`
      : `Watch for ${studyBlockTime} minute(s).`;

  return (
    <ConsumeWorkflowStep
      showButton={false}
      message={
        <>
          <Box>{studyMessage}.</Box>
          <Box mt={theme.spacing.messageBoxSpacing}>
            For now, <strong>don't take any notes.</strong>
          </Box>
          <UnorderedList>
            <ListItem>Focus on completely understanding the material.</ListItem>
            <ListItem>
              Stop and think. Ask yourself questions about the material.
            </ListItem>
          </UnorderedList>
        </>
      }
    >
      <Timer
        duration={studyBlockTime}
        nextUrl={`/consume/${currentStep + 1}/menu`}
        startAutomatically={false}
      />
    </ConsumeWorkflowStep>
  );
}
