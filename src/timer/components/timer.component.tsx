import { useEffect, useState } from "react";
import { Box, ButtonGroup, useColorModeValue } from "@chakra-ui/react";

import { Button } from "shared/components/button/button.component";
import { theme } from "shared/styles/theme";

const audio = new Audio("/alarm-beep.mp3");

function secondsToTimeString(seconds: number) {
  const secondsCounter = seconds % 60;
  const minutesCounter = Math.floor(seconds / 60);

  let computedSeconds = `${secondsCounter}`;
  if (computedSeconds.length === 1) computedSeconds = `0${secondsCounter}`;

  return `${minutesCounter}:${computedSeconds}`;
}

interface IProps {
  duration: number;

  shouldPlayAlarm?: boolean;
  startAutomatically?: boolean;
  showNextButton?: boolean;
  showSkipButton?: boolean;
  onNext?: () => void;
  refreshDep?: any; // when this changes, the timer re-renders
}
// From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
export function Timer(props: IProps) {
  const initialSeconds = props.duration * 60;

  const initialTimeString = secondsToTimeString(initialSeconds);
  const [timeString, setTimeString] = useState(initialTimeString);

  const [counter, setCounter] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(props.startAutomatically ?? true);

  const styles = {
    borderColor: useColorModeValue("gray.300", "gray.600"),
  };

  // set the initial timer
  useEffect(() => {
    setCounter(initialSeconds);
    setIsActive(props.startAutomatically ?? true);
  }, [initialSeconds, props.startAutomatically, props.refreshDep]);

  // when the raw counter changes, update display string
  useEffect(() => {
    if (counter >= 0) {
      setTimeString(secondsToTimeString(counter));
    }
  }, [counter]);

  // run when the timer hits 0
  useEffect(() => {
    if (initialSeconds > 0 && counter < 0) {
      if (props.shouldPlayAlarm) {
        audio.play();
      }

      props.onNext?.();
    }
    // eslint-disable-next-line
  }, [counter, initialSeconds]);

  // interval that runs every second
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActive && counter >= 0) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [counter, isActive]);

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

        {counter >= 0 && (
          <ButtonGroup mt={3} spacing={3}>
            <Button
              colorScheme={isActive ? "gray" : "green"}
              onClick={() => setIsActive(!isActive)}
              type="button"
            >
              {isActive ? "Pause" : "Start"}
            </Button>
            {props.showSkipButton && (
              <Button colorScheme="gray" onClick={props.onNext}>
                Skip Timer
              </Button>
            )}
          </ButtonGroup>
        )}
      </Box>

      {props.showNextButton && counter <= -1 && (
        <Button
          mt={theme.spacing.workflowStepButtonSpacing}
          onClick={props.onNext}
        >
          Next
        </Button>
      )}
    </>
  );
}
