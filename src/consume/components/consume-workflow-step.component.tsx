import { useAppSelector } from "shared/redux/store";
import { selectStep } from "consume/redux/consume.selectors";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useNextPage } from "shared/hooks/use-next-page.hook";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const step = useAppSelector(selectStep);
  const nextPage = useNextPage("/consume", step);

  return (
    <WorkflowStep onNext={nextPage} {...props}>
      {props.children}
    </WorkflowStep>
  );
}
