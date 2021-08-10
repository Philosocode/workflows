import {
  CreateHookForm,
  ICreateHookFormProps,
} from "hook/components/create-hook-form.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";
import { IWorkflowStepProps } from "shared/components/step/workflow-step.component";

interface IProps {
  workflowProps: IWorkflowStepProps;
  createHookFormProps: ICreateHookFormProps;
}
export function StudyHooks(props: IProps) {
  return (
    <ConsumeWorkflowStep showButton={false} {...props.workflowProps}>
      <CreateHookForm {...props.createHookFormProps} />
    </ConsumeWorkflowStep>
  );
}
