import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { quackers } from "avatar/data/quackers.avatar";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "step/step.slice";

export function DuckDebugWorkflowStep(props: IWorkflowStepProps) {
  const currentStep = useAppSelector(selectCurrentStep);

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
      keyPressDisabled
      {...props}
    />
  );
}
