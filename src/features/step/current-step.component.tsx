import { useCurrentStepParam } from "shared/hooks/use-current-step-param.hook";
import { useAppDispatch } from "shared/redux/store";
import { setCurrentStep } from "./step.slice";

export function CurrentStep() {
  const dispatch = useAppDispatch();

  useCurrentStepParam((step) => dispatch(setCurrentStep(step)));

  return null;
}
