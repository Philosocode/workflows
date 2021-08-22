import { useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useCountdownTimer } from "shared/hooks/use-countdown-timer.hook";
import { msToSeconds } from "shared/helpers/time.helpers";
import { getTimeRemaining } from "../logic/timer.helpers";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { TimerDisplay } from "./timer-display.component";

interface IProps {
  durationInMs: number;

  startAutomatically?: boolean;
  showNextButton?: boolean;
  showSkipButton?: boolean;
  handleNext?: (remainingSeconds: number) => void;
  refreshDep?: any; // when this changes, the timer re-renders
}
export function CountdownTimer(props: IProps) {
  const timer = useCountdownTimer({
    durationInMs: props.durationInMs,
    startAutomatically: props.startAutomatically ?? true,
    refreshDep: props.refreshDep,
  });

  const styles = {
    borderColor: useColorModeValue("gray.300", "gray.600"),
  };

  // run when timer is finished
  useEffect(() => {
    if (!timer.isFinished) return;

    props.handleNext?.(0);
    // eslint-disable-next-line
  }, [timer.isFinished, props.refreshDep]);

  function handleSkip() {
    props.handleNext?.(msToSeconds(getTimeRemaining(timer.endTime)));
  }

  return (
    <>
      <Box
        border="1px solid"
        borderColor={styles.borderColor}
        d="grid"
        placeItems="center"
        py={{ base: 5, md: 10 }}
        rounded="md"
      >
        <Box
          className="time"
          sx={theme.typography.countHeading}
          fontWeight="light"
        >
          <TimerDisplay
            isRunning={timer.isRunning}
            pauseTime={timer.pauseTime}
            refreshDep={props.refreshDep}
            countdown={{
              endTime: timer.endTime,
              initialDuration: props.durationInMs,
              timerFinished: timer.isFinished,
            }}
          />
        </Box>

        {!timer.isFinished && (
          <Buttons>
            <Button
              colorScheme={timer.isRunning ? "gray" : "green"}
              onClick={timer.toggleTimer}
              type="button"
            >
              {timer.isRunning ? "Pause" : "Start"}
            </Button>
            {props.showSkipButton && (
              <Button onClick={handleSkip}>Skip Timer</Button>
            )}
          </Buttons>
        )}
      </Box>
    </>
  );
}
