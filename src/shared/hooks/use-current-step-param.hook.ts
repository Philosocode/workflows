import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function useCurrentStepParam(callback: (page: number) => void) {
  const params = useParams<{ currentStep?: string }>();

  // whenever page number param changes, run the callback
  useEffect(() => {
    if (params.currentStep) {
      const stepParam = Number.parseInt(params.currentStep);
      let currentStep = stepParam;

      if (typeof currentStep === "number") {
        callback(currentStep);
      }
    }
    // eslint-disable-next-line
  }, [params]);
}
