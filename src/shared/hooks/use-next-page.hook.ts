import { useHistory } from "react-router-dom";

export function useNextPage(basePath: string, currentStep: number) {
  const history = useHistory();

  function next() {
    history.push(`${basePath}/${currentStep + 1}`);
  }

  return next;
}