import { useEffect, useState } from "react";

import { useInterval } from "shared/hooks/use-interval.hook";
import {
  getCountdownTimeString,
  getStopwatchTimeString,
} from "features/timer/logic/timer.helpers";
import { TIMER_DISPLAY_REFRESH_MS } from "../logic/timer.constants";

interface IProps {
  isRunning: boolean;
  pauseTime: number;

  refreshDep?: any; // trigger refresh of display text

  stopwatch?: {
    startTime: number;
  };

  countdown?: {
    endTime: number;
    initialDuration: number;
    timerFinished: boolean;
  };
}
export function TimerDisplay(props: IProps) {
  const [timeString, setTimeString] = useState("");

  // update time string whenever these props change
  useEffect(() => {
    setTimeString(getTimeText());
    // eslint-disable-next-line
  }, [props.stopwatch, props.countdown, props.isRunning, props.refreshDep]);

  // if timer is running, update timer every X ms
  useInterval(
    () => setTimeString(getTimeText()),
    props.isRunning ? TIMER_DISPLAY_REFRESH_MS : null,
  );

  function getTimeText() {
    if (props.countdown) {
      return getCountdownTimeString({
        isRunning: props.isRunning,
        pauseTime: props.pauseTime,
        endTime: props.countdown.endTime,
        initialDuration: props.countdown.initialDuration,
        timerFinished: props.countdown.timerFinished,
      });
    }

    if (props.stopwatch) {
      return getStopwatchTimeString({
        isRunning: props.isRunning,
        pauseTime: props.pauseTime,
        startTime: props.stopwatch.startTime,
      });
    }

    // will never reach here
    return "0:00";
  }

  return <>{timeString}</>;
}
