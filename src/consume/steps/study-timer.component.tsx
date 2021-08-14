import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { selectCurrentStep } from "step/step.slice";
import { updateTotalStudyTime } from "consume/redux/consume.slice";
import { minutesToMs, msToMinutes } from "shared/helpers/time.heleprs";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { commonHooks } from "hook/shared/hooks.data";

import { Button } from "shared/components/button/button.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Timer } from "timer/components/timer.component";

export function StudyTimer() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { studyBlockTime, shouldPlayAlarm } =
    useAppSelector(selectConsumeState);
  const currentStep = useAppSelector(selectCurrentStep);
  const [timerShowing, toggleTimerShowing] = useToggle();

  function handleNext(remainingMs: number) {
    const initialMs = minutesToMs(studyBlockTime);
    const msStudied = initialMs - remainingMs;
    const minutesStudied = msToMinutes(msStudied);

    dispatch(updateTotalStudyTime(minutesStudied));

    history.push(`/consume/${currentStep + 1}`);
  }

  return (
    <ConsumeWorkflowStep
      buttons={
        !timerShowing && (
          <Button colorScheme="green" onClick={toggleTimerShowing}>
            Show Timer
          </Button>
        )
      }
      showButton={false}
      message={
        timerShowing ? (
          <>
            <Box>Here are key questions to think about while you read:</Box>
            <UnorderedList>
              {commonHooks.map((hook) => (
                <ListItem key={hook}>{hook}</ListItem>
              ))}
            </UnorderedList>
          </>
        ) : (
          <>
            <Box>
              For now, <strong>don't take any notes.</strong>
            </Box>
            <Box>Focus on completely understanding the material.</Box>
          </>
        )
      }
    >
      {timerShowing && (
        <Timer
          duration={studyBlockTime}
          onNext={handleNext}
          startAutomatically={false}
          shouldPlayAlarm={shouldPlayAlarm}
          showSkipButton={true}
        />
      )}
    </ConsumeWorkflowStep>
  );
}
