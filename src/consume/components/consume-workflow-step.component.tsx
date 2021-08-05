import { useAppSelector } from "shared/redux/store";
import { selectConsumeStep } from "consume/redux/consume.selectors";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectConsumeStep);

  return (
    <WorkflowStep nextUrl={`/consume/${currentStep + 1}`} {...props}>
      {props.children}
    </WorkflowStep>
  );
}
