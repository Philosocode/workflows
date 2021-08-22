import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useLocationStore } from "features/location/location.store";
import { CONSUME_NUM_ROUTES } from "features/consume/routes/consume.routes";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  const { currentStep } = useLocationStore();

  return (
    <WorkflowStep
      {...props}
      breadcrumbLinks={["Read & Watch", `Step ${currentStep}`]}
      nextUrl={`/consume/${currentStep + 1}`}
      progress={{
        currentValue: currentStep,
        maxValue: CONSUME_NUM_ROUTES,
      }}
    />
  );
}
