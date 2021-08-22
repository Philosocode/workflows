import { useCurrentStepParam } from "shared/hooks/use-current-step-param.hook";
import { useLocationStore } from "./location.store";

export function CurrentStep() {
  const { setCurrentStep } = useLocationStore();

  useCurrentStepParam((step) => setCurrentStep(step));

  return null;
}
