import { Box } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { useTimerStore } from "../logic/timer.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { TimerDisplay } from "./timer-display.component";

interface IProps {
  handleClose?: () => void;
}
export function Stopwatch(props: IProps) {
  const timer = useTimerStore();

  function toggleTimer() {
    // initial state
    if (!timer.isRunning && timer.pauseTime === 0) {
      timer.start();
      props.handleClose?.();
    } else if (timer.isRunning) {
      timer.pause();
    } else {
      timer.unpause();
      props.handleClose?.();
    }
  }

  return (
    <>
      <Box d="grid" placeItems="center">
        <Box sx={theme.typography.countHeading}>
          <TimerDisplay
            isRunning={timer.isRunning}
            pauseTime={timer.pauseTime}
            stopwatch={{
              startTime: timer.startTime,
            }}
          />
        </Box>

        <Buttons mt={3}>
          <Button
            colorScheme={timer.isRunning ? "gray" : "green"}
            onClick={toggleTimer}
          >
            {timer.isRunning ? "Pause" : "Start"}
          </Button>
          <Button
            onClick={timer.reset}
            disabled={!timer.isRunning && timer.pauseTime === 0}
          >
            Reset
          </Button>
        </Buttons>
      </Box>
    </>
  );
}
