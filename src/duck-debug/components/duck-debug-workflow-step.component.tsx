import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { quackers } from "avatars/data/quackers.avatar";

interface IProps extends IWorkflowStepProps {}
export function DuckDebugWorkflowStep(props: IProps) {
  return (
    <WorkflowStep
      messageProps={{ avatar: quackers }}
      editor={{
        showEditor: true,
      }}
      keyPressDisabled
      {...props}
    >
      {props.children}
    </WorkflowStep>
  );
}
