import { useEffect, useState } from "react";

import { TTimerType } from "../logic/timer.types";
import { useInterval } from "shared/hooks/use-interval.hook";
import {
  getCountdownTimeString,
  getStopwatchTimeString,
} from "features/timer/logic/timer.helpers";

const defaultRefreshDelay = 500;

interface IProps {
  isRunning: boolean;
  pauseTime: number;

  refreshDelay?: number;
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

  useEffect(() => {
    setTimeString(getTimeText());
    // eslint-disable-next-line
  }, [props.stopwatch, props.countdown, props.isRunning, props.refreshDep]);

  // hook to update timer every X ms
  // happens if timer is running
  useInterval(
    () => {
      setTimeString(getTimeText());
    },
    props.isRunning ? props.refreshDelay ?? defaultRefreshDelay : null,
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
    } else if (props.stopwatch) {
      return getStopwatchTimeString({
        isRunning: props.isRunning,
        pauseTime: props.pauseTime,
        startTime: props.stopwatch.startTime,
      });
    }

    return "0:00";
  }

  return <>{timeString}</>;
}
