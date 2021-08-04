import { useAppSelector } from "shared/redux/store";
import { selectConsumeStep } from "consume/redux/consume.selectors";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useNextStep } from "shared/hooks/use-next-step.hook";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectConsumeStep);
  const nextStep = useNextStep("/consume", currentStep);

  return (
    <WorkflowStep onNext={nextStep} {...props}>
      {props.children}
    </WorkflowStep>
  );
}
