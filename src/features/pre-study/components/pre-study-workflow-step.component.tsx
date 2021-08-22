import { preStudyComponents } from "features/pre-study/routes/pre-study.routes";
import { useLocationStore } from "features/location/location.store";
import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";

export function PreStudyWorkflowStep(props: IWorkflowStepProps) {
  const { currentStep } = useLocationStore();

  return (
    <WorkflowStep
      breadcrumbLinks={["Pre-Study", `Step ${currentStep}`]}
      nextUrl={`/pre-study/${currentStep + 1}`}
      progress={{
        currentValue: currentStep,
        maxValue: preStudyComponents.length,
      }}
      {...props}
    >
      {props.children}
    </WorkflowStep>
  );
}
