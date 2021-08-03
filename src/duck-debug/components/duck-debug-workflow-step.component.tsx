import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useAppSelector } from "shared/redux/store";
import { useNextStep } from "shared/hooks/use-next-step.hook";
import { selectDuckDebugStep } from "duck-debug/redux/duck-debug.selectors";

interface IProps extends IWorkflowStepProps {}
export function DuckDebugWorkflowStep(props: IProps) {
  const currentStep = useAppSelector(selectDuckDebugStep);
  const nextStep = useNextStep("/duck-debug", currentStep);

  return (
    <WorkflowStep onNext={nextStep} {...props}>
      {props.children}
    </WorkflowStep>
  );
}
