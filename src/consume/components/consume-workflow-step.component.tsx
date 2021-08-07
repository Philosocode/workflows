import { useAppSelector } from "shared/redux/store";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { selectNextStep } from "step/step.slice";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const nextStep = useAppSelector(selectNextStep);

  return (
    <WorkflowStep
      breadcrumbLinks={[
        { text: "Read & Watch", to: "#" },
        { text: `Step ${nextStep - 1}`, to: "#" },
      ]}
      nextUrl={`/consume/${nextStep}`}
      {...props}
    />
  );
}
