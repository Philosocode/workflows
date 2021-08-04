import { useAppDispatch } from "shared/redux/store";
import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";
import { useCurrentStepParam } from "shared/hooks/use-current-step-param.hook";
import { setStep } from "duck-debug/redux/duck-debug.slice";

export function DuckDebugPage() {
  const dispatch = useAppDispatch();

  // whenever page number param changes, set it
  useCurrentStepParam((stepNumber) => dispatch(setStep(stepNumber)));

  return <DuckDebugNavbar />;
}
