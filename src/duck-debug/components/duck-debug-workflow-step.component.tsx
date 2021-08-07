import { useLocation } from "react-router-dom";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { quackers } from "avatar/data/quackers.avatar";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "step/step.slice";
import {
  DUCK_DEBUG_NUM_PROG_ROUTES,
  DUCK_DEBUG_NUM_REGULAR_ROUTES,
} from "duck-debug/routes/duck-debug.routes";

export function DuckDebugWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);
  const location = useLocation();
  const numSteps = location.pathname.includes("prog")
    ? DUCK_DEBUG_NUM_PROG_ROUTES
    : DUCK_DEBUG_NUM_REGULAR_ROUTES;

  return (
    <WorkflowStep
      breadcrumbLinks={[
        { text: "Rubber Duck Debugging", to: "#" },
        { text: `Step ${currentStep}`, to: "#" },
      ]}
      messageProps={{ avatar: quackers }}
      editor={{
        showEditor: true,
      }}
      progress={{ currentValue: currentStep, maxValue: numSteps }}
      keyPressDisabled
      {...props}
    />
  );
}
