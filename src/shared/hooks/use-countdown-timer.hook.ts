import { useEffect, useRef, useState } from "react";

interface IProps {
  durationInMs: number;

  refreshDep?: any;
  startAutomatically?: boolean;
}
export function useCountdownTimer(props: IProps) {
  const [endTime, setEndTime] = useState(0);
  const [pauseTime, setPauseTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(
    props.startAutomatically ?? false,
  );
  const [isFinished, setIsFinished] = useState(false);
  const [isRunning, setIsRunning] = useState(props.startAutomatically ?? false);

  const timerTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // reset state when props change
  useEffect(() => {
    resetTimer();

    // eslint-disable-next-line
  }, [props.durationInMs, props.startAutomatically, props.refreshDep]);

  // whenever the end time is set, set a timeout to finish the timer
  useEffect(() => {
    if (!isRunning) return;

    timerTimeout.current = setTimeout(() => {
      setIsFinished(true);
      setIsRunning(false);
    }, endTime - Date.now());

    return () => {
      clearTimerTimeout();
    };
  }, [endTime, isRunning, props.durationInMs]);

  function clearTimerTimeout() {
    if (timerTimeout.current) {
      clearTimeout(timerTimeout.current);
    }
  }

  function toggleTimer() {
    if (!hasStarted) {
      return startTimer();
    }

    isRunning ? pauseTimer() : unpauseTimer();
  }

  function startTimer() {
    setEndTime(Date.now() + props.durationInMs + 600);
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

  return {
    endTime,
    isRunning,
    pauseTime,
    isFinished,

    toggleTimer,
  };
}
