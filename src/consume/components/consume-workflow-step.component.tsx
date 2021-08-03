import { useAppSelector } from "shared/redux/store";
import { selectConsumeStep } from "consume/redux/consume.selectors";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useNextPage } from "shared/hooks/use-next-page.hook";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectConsumeStep);
  const nextPage = useNextPage("/consume", currentStep);

  return (
    <WorkflowStep onNext={nextPage} {...props}>
      {props.children}
    </WorkflowStep>
  );
}
