export function msToMMSS(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds.toFixed(0);
}

export function minutesToMs(minutes: number) {
  return minutes * 60000;
}

export function msToSeconds(ms: number) {
  return Math.round(ms / 1000);
}

export function msToMinutes(ms: number) {
  return Math.round(ms / 60000);
}
