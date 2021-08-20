import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";

import { quackers } from "features/avatar/data/quackers.avatar";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "features/step/step.slice";
import { problemSolvingRoutes } from "features/problem-solving/assets/problem-solving.data";

export function ProblemSolvingWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <WorkflowStep
      breadcrumbLinks={["Problem Solving", `Step ${currentStep}`]}
      messageProps={{ avatar: quackers }}
      nextUrl={`/problem-solving/${currentStep + 1}`}
      editor={{ showEditor: true }}
      keyPressDisabled
      progress={{
        currentValue: currentStep,
        maxValue: problemSolvingRoutes.length,
      }}
      {...props}
    />
  );
}