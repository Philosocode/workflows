import { useHistory } from "react-router-dom";

export function useNextStep(
  basePath: string,
  currentStep: number,
  suffix?: string,
) {
  const history = useHistory();

  function next() {
    let nextPath = `${basePath}/${currentStep + 1}`;
    if (suffix) nextPath += `/${suffix}`;

    history.push(nextPath);
  }

  return next;
}
