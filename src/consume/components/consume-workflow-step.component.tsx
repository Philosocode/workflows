import { useAppSelector } from "shared/redux/store";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { selectCurrentStep } from "step/step.slice";
import { CONSUME_NUM_ROUTES } from "consume/routes/consume.routes";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <WorkflowStep
      {...props}
      breadcrumbLinks={[
        { text: "Read & Watch" },
        { text: `Step ${currentStep}` },
      ]}
      nextUrl={`/consume/${currentStep + 1}`}
      progress={{
        currentValue: currentStep,
        maxValue: CONSUME_NUM_ROUTES,
      }}
    />
  );
}
