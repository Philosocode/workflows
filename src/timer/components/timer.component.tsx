import { useEffect, useState } from "react";
import { Box, ButtonGroup } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectConsumeState } from "consume/redux/consume.selectors";

import { Button } from "shared/components/button/button.component";
import { theme } from "theme";

interface IProps {
  duration: number;
  goToMenu: () => void;

  startAutomatically?: boolean;
}
// From: https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
export function Timer(props: IProps) {
  const initialSeconds = props.duration * 60;

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
        border="1px solid"
        borderColor="gray.300"
        d="grid"
        placeItems="center"
        pt={10}
        pb={12}
        shadow="md"
        rounded="md"
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
            <Button color="gray" onClick={props.goToMenu}>
              Skip Timer
            </Button>
          </ButtonGroup>
        )}
      </Box>

      {counter <= 0 && (
        <Button onClick={props.goToMenu} mt={theme.spacing.nextButtonMarginTop}>
          Next
        </Button>
      )}
    </>
  );
}
