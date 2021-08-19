import { useLocation } from "react-router-dom";

import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { quackers } from "features/avatar/data/quackers.avatar";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "features/step/step.slice";
import {
  DUCK_DEBUG_NUM_PROG_ROUTES,
  DUCK_DEBUG_NUM_REGULAR_ROUTES,
} from "features/duck-debug/routes/duck-debug.routes";

export function DuckDebugWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);
  const location = useLocation();
  const numSteps = location.pathname.includes("prog")
    ? DUCK_DEBUG_NUM_PROG_ROUTES
    : DUCK_DEBUG_NUM_REGULAR_ROUTES;

  return (
    <WorkflowStep
      breadcrumbLinks={["Rubber Duck Debugging", `Step ${currentStep}`]}
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
