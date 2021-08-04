import {
  IWorkflowStepProps,
  WorkflowStep,
} from "shared/components/step/workflow-step.component";

export function ConsumeWorkflowStep(props: IWorkflowStepProps) {
  return <WorkflowStep {...props}>{props.children}</WorkflowStep>;
}
