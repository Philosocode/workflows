import { useState } from "react";
import { Box, ButtonGroup } from "@chakra-ui/react";

import { Button } from "shared/components/button.component";
import { useEffect } from "react";
import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/logic/consume.selectors";

interface IProps {
  goToMenu: () => void;
  startAutomatically?: boolean;
}
// From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
export function Timer(props: IProps) {
  const { studyBlockTime } = useAppSelector(selectConsumeState);
  const initialSeconds = studyBlockTime * 60;

  const initialTimeString = secondsToTimeString(initialSeconds);
  const [timeString, setTimeString] = useState(initialTimeString);

  const [counter, setCounter] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(props.startAutomatically ?? true);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActive && counter >= 0) {
      intervalId = setInterval(() => {
        setTimeString(secondsToTimeString(counter));
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function secondsToTimeString(seconds: number) {
    const secondsCounter = seconds % 60;
    const minutesCounter = Math.floor(seconds / 60);

    let computedSeconds = `${secondsCounter}`;
    if (computedSeconds.length === 1) computedSeconds = `0${secondsCounter}`;

    return `${minutesCounter}:${computedSeconds}`;
  }

  return (
    <>
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
        {counter > 0 && (
          <ButtonGroup mt={3} className="buttons">
            <Button
              color="green"
              onClick={() => setIsActive(!isActive)}
              className="start"
              type="button"
            >
              {isActive ? "Pause" : "Start"}
            </Button>
          </ButtonGroup>
        )}
      </Box>
      {counter <= 0 && (
        <Button color="green" onClick={props.goToMenu} mt={8}>
          Next
        </Button>
      )}
    </>
  );
}
