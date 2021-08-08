import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, ButtonGroup, useColorModeValue } from "@chakra-ui/react";

import { Button } from "shared/components/button/button.component";
import { theme } from "shared/styles/theme";

const audio = new Audio("/alarm-beep.mp3");

interface IProps {
  duration: number;

  nextUrl?: string;
  shouldPlayAlarm?: boolean;
  startAutomatically?: boolean;
  showNextButton?: boolean;
  showSkipButton?: boolean;
  onNext?: () => void;
  refreshDep?: any;
}
// From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
export function Timer(props: IProps) {
  const history = useHistory();
  const initialSeconds = props.duration;

  const initialTimeString = secondsToTimeString(initialSeconds);
  const [timeString, setTimeString] = useState(initialTimeString);

  const [counter, setCounter] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(props.startAutomatically ?? true);

  useEffect(() => {
    setCounter(initialSeconds);
  }, [initialSeconds, props.refreshDep]);

  useEffect(() => {
    if (counter >= 0) {
      setTimeString(secondsToTimeString(counter));
    }
  }, [counter]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActive && counter >= 0) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    // timer finished
    if (initialSeconds > 0 && counter < 0) {
      props.onNext?.();

      if (props.shouldPlayAlarm) {
        audio.play();
      }
    }

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [counter, isActive, initialSeconds, props.shouldPlayAlarm]);

  function secondsToTimeString(seconds: number) {
    const secondsCounter = seconds % 60;
    const minutesCounter = Math.floor(seconds / 60);

    let computedSeconds = `${secondsCounter}`;
    if (computedSeconds.length === 1) computedSeconds = `0${secondsCounter}`;

    return `${minutesCounter}:${computedSeconds}`;
  }

  function handleNext() {
    if (props.nextUrl) {
      history.push(props.nextUrl);
    }

    props.onNext?.();
  }

  const styles = {
    borderColor: useColorModeValue("gray.300", "gray.600"),
  };

  return (
    <>
      <Box
        border="1px solid"
        borderColor={styles.borderColor}
        d="grid"
        placeItems="center"
        pt={10}
        pb={12}
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
              <Button colorScheme="gray">Skip Timer</Button>
            )}
          </ButtonGroup>
        )}
      </Box>

      {props.showNextButton && counter <= -1 && (
        <Button
          mt={theme.spacing.workflowStepButtonSpacing}
          onClick={handleNext}
        >
          Next
        </Button>
      )}
    </>
  );
}
