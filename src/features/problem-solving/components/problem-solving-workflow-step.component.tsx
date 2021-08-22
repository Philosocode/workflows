import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";

import { quackers } from "features/avatar/data/quackers.avatar";
import { problemSolvingRoutes } from "features/problem-solving/assets/problem-solving.data";
import { useLocationStore } from "features/location/location.store";

export function ProblemSolvingWorkflowStep(props: IWorkflowStepProps) {
  const { currentStep } = useLocationStore();

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
