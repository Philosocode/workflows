import { useEffect, useState } from "react";
import { Box, Fade, Text } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

import { theme } from "shared/styles/theme";

import { IconButton } from "shared/components/button/icon-button.component";
import {
  selectTimerStarted,
  useTimerStore,
} from "features/timer/logic/timer.store";
import { useInterval } from "shared/hooks/use-interval.hook";
import { getTimeString } from "features/timer/logic/timer.helpers";

interface IProps {
  showStopwatch: () => void;
}
export function StopwatchTimerIcon(props: IProps) {
  const [timeString, setTimeString] = useState("");
  const timer = useTimerStore();
  const timerStarted = useTimerStore(selectTimerStarted);

  useEffect(() => {
    setTimeString(getTimeText());
    // eslint-disable-next-line
  }, [timer.startTime, timer.pauseTime, timer.isRunning]);

  // hook to update timer display
  useInterval(
    () => {
      setTimeString(getTimeText());
    },
    // if running, update display every 500ms
    timer.isRunning ? 500 : null,
  );

  function getTimeText() {
    return getTimeString({
      isRunning: timer.isRunning,
      pauseTime: timer.pauseTime,
      startTime: timer.startTime,
    });
  }

  return (
    <Box position="relative">
      <IconButton
        aria-label="Stopwatch"
        icon={<FaStopwatch />}
        onClick={props.showStopwatch}
      />
      <Fade in={timerStarted}>
        <Text
          sx={{
            ...theme.typography.condensed,
            fontWeight: "bold",
          }}
          color="gray.200"
          fontSize="xs"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          bottom={-3}
          pointerEvents="none"
        >
          {timeString}
        </Text>
      </Fade>
    </Box>
  );
}
