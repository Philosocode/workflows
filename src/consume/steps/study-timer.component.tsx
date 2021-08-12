import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { selectCurrentStep } from "step/step.slice";
import { updateTotalStudyTime } from "consume/redux/consume.slice";
import { minutesToMs, msToMinutes } from "shared/helpers/time.heleprs";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { KeyQuestionsCard } from "consume/components/key-questions-card.component";
import { Timer } from "timer/components/timer.component";

export function StudyTimer() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { studyBlockTime, shouldPlayAlarm } =
    useAppSelector(selectConsumeState);
  const currentStep = useAppSelector(selectCurrentStep);

  function handleNext(remainingMs: number) {
    const initialMs = minutesToMs(studyBlockTime);
    const msStudied = initialMs - remainingMs;
    const minutesStudied = msToMinutes(msStudied);

    dispatch(updateTotalStudyTime(minutesStudied));

    history.push(`/consume/${currentStep + 1}`);
  }

  return (
    <ConsumeWorkflowStep
      showButton={false}
      message={
        <Box>
          Don't take any notes. For now, focus on completely understanding the
          material.
        </Box>
      }
    >
      <KeyQuestionsCard />
      <Timer
        duration={studyBlockTime}
        onNext={handleNext}
        startAutomatically={false}
        shouldPlayAlarm={shouldPlayAlarm}
        showSkipButton={true}
      />
    </ConsumeWorkflowStep>
  );
}
