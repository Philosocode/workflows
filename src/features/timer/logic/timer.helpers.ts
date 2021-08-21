import { msToMMSS } from "shared/helpers/time.helpers";

export function getTimeString(args: {
  isRunning: boolean;
  pauseTime: number;
  startTime: number;
}) {
  // if timer paused, show pause time
  if (args.pauseTime > 0) return msToMMSS(args.pauseTime);

  // if timer running, show time since started
  if (args.isRunning) return msToMMSS(Date.now() - args.startTime);

  // timer never started. Show 0s
  return msToMMSS(0);
}
