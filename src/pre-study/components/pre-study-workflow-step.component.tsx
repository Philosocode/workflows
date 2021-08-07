import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "step/step.slice";

export function PreStudyWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <WorkflowStep
      breadcrumbLinks={[
        { text: "Pre-Study", to: "#" },
        { text: `Step ${currentStep}`, to: "#" },
      ]}
      nextUrl={`/pre-study/${currentStep + 1}`}
      {...props}
    >
      {props.children}
    </WorkflowStep>
  );
}
