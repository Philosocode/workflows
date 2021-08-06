import { useEffect, useState } from "react";
import { Box, ButtonGroup, useColorModeValue } from "@chakra-ui/react";

import { Button } from "shared/components/button/button.component";
import { theme } from "shared/styles/theme";
import { useAppSelector } from "shared/redux/store";
import { selectShouldPlayAlarm } from "consume/redux/consume.selectors";

const audio = new Audio("/alarm-beep.mp3");

interface IProps {
  duration: number;
  onDone: () => void;

  startAutomatically?: boolean;
}
// From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
export function Timer(props: IProps) {
  const initialSeconds = props.duration * 60;

  const initialTimeString = secondsToTimeString(initialSeconds);
  const [timeString, setTimeString] = useState(initialTimeString);

  const [counter, setCounter] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(props.startAutomatically ?? true);

  const shouldPlayAlarm = useAppSelector(selectShouldPlayAlarm);

  useEffect(() => {
    setCounter(props.duration * 60);
  }, [props.duration]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActive && counter >= 0) {
      intervalId = setInterval(() => {
        setTimeString(secondsToTimeString(counter));
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    if (initialSeconds > 0 && shouldPlayAlarm && counter === -1) {
      audio.play();
    }

    return () => clearInterval(intervalId);
  }, [counter, isActive, initialSeconds, shouldPlayAlarm]);

  function secondsToTimeString(seconds: number) {
    const secondsCounter = seconds % 60;
    const minutesCounter = Math.floor(seconds / 60);

    let computedSeconds = `${secondsCounter}`;
    if (computedSeconds.length === 1) computedSeconds = `0${secondsCounter}`;

    return `${minutesCounter}:${computedSeconds}`;
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
          fontSize={{ base: "6xl", md: "7xl" }}
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
            <Button colorScheme="gray" onClick={props.onDone}>
              Skip Timer
            </Button>
          </ButtonGroup>
        )}
      </Box>

      {counter <= -1 && (
        <Button
          onClick={props.onDone}
          mt={theme.spacing.workflowStepButtonSpacing}
        >
          Next
        </Button>
      )}
    </>
  );
}
