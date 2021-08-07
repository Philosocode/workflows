import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";

import { quackers } from "avatar/data/quackers.avatar";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "step/step.slice";
import { problemSolvingRoutes } from "problem-solving/assets/problem-solving.data";

export function ProblemSolvingWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <WorkflowStep
      breadcrumbLinks={[
        { text: "Problem Solving", to: "#" },
        { text: `Step ${currentStep}`, to: "#" },
      ]}
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
