import { preStudyComponents } from "features/pre-study/routes/pre-study.routes";
import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "features/step/step.slice";

export function PreStudyWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);

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