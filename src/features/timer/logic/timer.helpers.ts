import { msToMMSS } from "shared/helpers/time.helpers";

interface ITimerArgs {
  isRunning: boolean;
  pauseTime: number;
}

interface IStopwatchTimerArgs extends ITimerArgs {
  startTime: number;
}
export function getStopwatchTimeString(args: IStopwatchTimerArgs) {
  // if timer paused, show pause time
  if (args.pauseTime > 0) return msToMMSS(args.pauseTime);

  // if timer running, show time since started
  if (args.isRunning) return msToMMSS(Date.now() - args.startTime);

  // timer never started. Show 0s
  return msToMMSS(0);
}

interface ICountdownTimerArgs extends ITimerArgs {
  endTime: number;
  initialDuration: number;
  timerFinished: boolean;
}

export function getCountdownTimeString(args: ICountdownTimerArgs) {
  if (args.timerFinished) {
    return "0:00";
  }

  // if timer running, show remaining time
  if (args.isRunning) {
    return msToMMSS(getTimeRemaining(args.endTime));
  }

  // if timer paused, show remaining time
  if (args.pauseTime) {
    return msToMMSS(args.pauseTime);
  }

  // timer is stopped and no pause time -> show initial duration
  return msToMMSS(args.initialDuration);
}

export function getTimeRemaining(endTime: number) {
  return Math.max(endTime - Date.now(), 0);
}
