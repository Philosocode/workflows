import { useEffect, useState } from "react";
import { Box, ButtonGroup, useColorModeValue } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useTimer } from "shared/hooks/use-timer.hook";
import { useInterval } from "shared/hooks/use-interval.hook";
import { msToSeconds } from "shared/helpers/time.helpers";

import { Button } from "shared/components/button/button.component";

const displayRefreshMs = 500;

interface IProps {
  duration: number;

  startAutomatically?: boolean;
  showNextButton?: boolean;
  showSkipButton?: boolean;
  onNext?: (remainingSeconds: number) => void;
  refreshDep?: any; // when this changes, the timer re-renders
}
export function CountdownTimer(props: IProps) {
  const timer = useTimer({
    // the extra 0.01 delays the initial timer tick
    durationInMinutes: props.duration,
    startAutomatically: props.startAutomatically ?? true,
  });

  const [timeString, setTimeString] = useState("");

  const styles = {
    borderColor: useColorModeValue("gray.300", "gray.600"),
  };

  useEffect(() => {
    // update time string whenever props.duration changes
    setTimeString(timer.getTimeText());

    // eslint-disable-next-line
  }, [props.duration, timer]);

  // run when timer is finished
  useEffect(() => {
    if (!timer.isFinished) return;

    props.onNext?.(0);
  }, [timer.isFinished, props]);

  // hook to update timer display
  useInterval(
    () => {
      setTimeString(timer.getTimeText());
    },
    // if running, update display every X ms
    timer.isRunning ? displayRefreshMs : null,
  );

  function handleSkip() {
    props.onNext?.(msToSeconds(timer.getTimeRemaining()));
  }

  return (
    <>
      <Box
        border="1px solid"
        borderColor={styles.borderColor}
        d="grid"
        placeItems="center"
        pt={{ base: 5, md: 10 }}
        pb={{ base: 9, md: 12 }}
        shadow="md"
        rounded="md"
      >
        <Box
          className="time"
          sx={theme.typography.countHeading}
          fontWeight="light"
        >
          {timeString}
        </Box>

        {!timer.isFinished && (
          <ButtonGroup mt={3} spacing={3}>
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
          </ButtonGroup>
        )}
      </Box>
    </>
  );
}
