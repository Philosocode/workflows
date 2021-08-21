import { Box, Fade, Text, useColorModeValue } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

import { theme } from "shared/styles/theme";
import {
  selectTimerStarted,
  useTimerStore,
} from "features/timer/logic/timer.store";

import { IconButton } from "shared/components/button/icon-button.component";
import { TimerDisplay } from "./timer-display.component";
import { useSettingsStore } from "features/settings/settings.store";

interface IProps {
  showStopwatch: () => void;
}
export function StopwatchTimerIcon(props: IProps) {
  const timer = useTimerStore();
  const timerStarted = useTimerStore(selectTimerStarted);
  const { showStopwatchTimerLabel } = useSettingsStore();

  const labelColor = useColorModeValue("gray.500", "gray.200");

  return (
    <Box position="relative">
      <IconButton
        aria-label="Stopwatch"
        icon={<FaStopwatch />}
        onClick={props.showStopwatch}
      />
      {showStopwatchTimerLabel && timerStarted && (
        <Fade in>
          <Text
            sx={{
              ...theme.typography.condensed,
              fontWeight: "bold",
            }}
            color={labelColor}
            fontSize="xs"
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            bottom={-3}
            pointerEvents="none"
          >
            <TimerDisplay
              isRunning={timer.isRunning}
              pauseTime={timer.pauseTime}
              stopwatch={{
                startTime: timer.startTime,
              }}
            />
          </Text>
        </Fade>
      )}
    </Box>
  );
}
