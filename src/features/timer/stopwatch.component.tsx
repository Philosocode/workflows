import { useEffect, useState } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useInterval } from "shared/hooks/use-interval.hook";
import { useTimerStore } from "./timer.store";
import { getTimeString } from "./timer.helpers";


const displayRefreshMs = 500;

export function Stopwatch() {
  const timer = useTimerStore();
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    setTimeString(getTimeText());
    // eslint-disable-next-line
  }, [timer.startTime, timer.pauseTime, timer.isRunning]);

  // hook to update timer display
  useInterval(
    () => {
      setTimeString(getTimeText());
    },
    // if running, update display every X ms
    timer.isRunning ? displayRefreshMs : null,
  );

  function toggleTimer() {
    // initial state
    if (!timer.isRunning && timer.pauseTime === 0) {
      timer.startTimer();
    } else if (timer.isRunning) {
      timer.pauseTimer();
    } else {
      timer.unpauseTimer();
    }
  }

  function getTimeText() {
    return getTimeString({
      isRunning: timer.isRunning,
      pauseTime: timer.pauseTime,
      startTime: timer.startTime,
    });
  }

  return (
    <>
      <Box d="grid" placeItems="center">
        <Box
          className="time"
          sx={theme.typography.countHeading}
          fontWeight="light"
        >
          {timeString}
        </Box>

        <ButtonGroup mt={3} spacing={3}>
          <Button
            colorScheme={timer.isRunning ? "gray" : "green"}
            onClick={toggleTimer}
          >
            {timer.isRunning ? "Pause" : "Start"}
          </Button>
          <Button
            onClick={timer.resetTimer}
            disabled={!timer.isRunning && timer.pauseTime === 0}
          >
            Reset
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
