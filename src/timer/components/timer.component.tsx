import { useState } from "react";
import { Box, ButtonGroup } from "@chakra-ui/react";

import { Button } from "shared/components/button.component";
import { useEffect } from "react";

const initialTimeString = "00:00";

interface IProps {
  startAutomatically?: boolean;
}
// From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
export function Timer(props: IProps) {
  const [timeString, setTimeString] = useState(initialTimeString);
  const [isActive, setIsActive] = useState(props.startAutomatically ?? true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondsCounter = counter % 60;
        const minutesCounter = Math.floor(counter / 60);

        let computedSeconds = `${secondsCounter}`;
        if (computedSeconds.length === 1)
          computedSeconds = `0${secondsCounter}`;

        let computedMinutes = `${minutesCounter}`;
        if (computedMinutes.length === 1)
          computedMinutes = `0${minutesCounter}`;

        setTimeString(`${computedMinutes}:${computedSeconds}`);
        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function resetTimer() {
    setIsActive(false);
    setCounter(0);
    setTimeString(initialTimeString);
  }

  return (
    <Box
      border="1px solid gray"
      borderRadius="md"
      className="container"
      d="grid"
      maxW="60rem"
      m="0 auto"
      placeItems="center"
      py="10"
    >
      <Box className="time" fontSize="6xl">
        {timeString}
      </Box>
      <ButtonGroup mt={3} className="buttons">
        <Button
          color="green"
          onClick={() => setIsActive(!isActive)}
          className="start"
          type="button"
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          color="red"
          onClick={resetTimer}
          className="reset"
          type="button"
        >
          Reset
        </Button>
      </ButtonGroup>
    </Box>
  );
}
