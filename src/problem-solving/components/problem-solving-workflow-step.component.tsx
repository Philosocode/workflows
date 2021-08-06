import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";
import { quackers } from "avatar/data/quackers.avatar";

type TMode = "Understand" | "Examples" | "Breakdown" | "Code" | "Refactor";
interface IProps extends IWorkflowStepProps {
  mode: TMode;
}
export function ProblemSolvingWorkflowStep(props: IProps) {
  return (
    <WorkflowStep
      messageProps={{ avatar: quackers }}
      editor={{
        showEditor: true,
      }}
      keyPressDisabled
      {...props}
    />
  );
}
