import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { isNumeric } from "shared/helpers/number.helper";

export function useCurrentStepParam(callback: (step: number) => void) {
  const params = useParams<{ currentStep?: string }>();

  // whenever page number param changes, run the callback
  useEffect(() => {
    if (params.currentStep && isNumeric(params.currentStep)) {
      callback(Number.parseInt(params.currentStep));
    }
    // eslint-disable-next-line
  }, [params]);
}
