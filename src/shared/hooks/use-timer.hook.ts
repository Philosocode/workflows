import { useEffect, useRef, useState } from "react";

import { minutesToMs, msToMMSS } from "shared/helpers/time.helpers";

interface IProps {
  durationInMinutes: number;

  refreshDep?: any;
  startAutomatically?: boolean;
}
export function useTimer(props: IProps) {
  const [endTime, setEndTime] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(
    props.startAutomatically ?? false,
  );
  const [isFinished, setIsFinished] = useState(false);
  const [isRunning, setIsRunning] = useState(props.startAutomatically ?? false);

  const timerTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // reset end time when props change
  useEffect(() => {
    resetTimer();

    // eslint-disable-next-line
  }, [props.durationInMinutes, props.startAutomatically, props.refreshDep]);

  // whenever the end time is set, create timeout to finish the timer
  useEffect(() => {
    if (!isRunning) return;

    timerTimeout.current = setTimeout(() => {
      setIsFinished(true);
      setIsRunning(false);
    }, endTime - Date.now());

    return () => {
      clearTimerTimeout();
    };
  }, [endTime, isRunning, props.durationInMinutes]);

  function clearTimerTimeout() {
    if (timerTimeout.current) {
      clearTimeout(timerTimeout.current);
    }
  }

  function getTimeRemaining() {
    return Math.max(endTime - Date.now(), 0);
  }

  function toggleTimer() {
    if (!hasStarted) {
      return startTimer();
    }

    isRunning ? pauseTimer() : unpauseTimer();
  }

  function startTimer() {
    // the extra 0.01 delays the start of the initial tick
    // need to use Number() to prevent props.durationInMinutes from being
    // treated like a string
    setEndTime(
      Date.now() + minutesToMs(Number(props.durationInMinutes) + 0.01),
    );
    setHasStarted(true);
    setIsRunning(true);
  }

  function pauseTimer() {
    clearTimerTimeout();

    setPauseTime(endTime - Date.now());
    setIsRunning(false);
  }

  function unpauseTimer() {
    const updatedEndTime = Date.now() + pauseTime;

    setEndTime(updatedEndTime);
    setPauseTime(0);
    setIsRunning(true);
  }

  function resetTimer() {
    setEndTime(0);
    setPauseTime(0);
    setHasStarted(false);
    setIsRunning(props.startAutomatically ?? false);
    setIsFinished(false);

    clearTimerTimeout();
  }

  function getTimeText() {
    // if timer running, show remaining time
    if (isRunning) {
      return msToMMSS(getTimeRemaining());
    }

    // if timer paused, show remaining time
    if (pauseTime) {
      return msToMMSS(pauseTime);
    }

    // timer is stopped and no pause time -> show initial duration
    return msToMMSS(minutesToMs(props.durationInMinutes));
  }

  return {
    isRunning,
    pauseTime,
    isFinished,

    toggleTimer,
    getTimeText,
    getTimeRemaining,
  };
}
