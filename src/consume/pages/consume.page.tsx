import { useAppDispatch } from "shared/redux/store";
import { setStep } from "consume/redux/consume.slice";

import { ConsumeNavbar } from "consume/components/consume-navbar.component";
import { useCurrentStepParam } from "shared/hooks/use-current-step-param.hook";

export function ConsumePage() {
  const dispatch = useAppDispatch();

  // whenever page number param changes, set it
  useCurrentStepParam((stepNumber) => dispatch(setStep(stepNumber)));

  return <ConsumeNavbar />;
}
