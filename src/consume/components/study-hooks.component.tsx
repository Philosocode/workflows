import {
  CreateHookForm,
  ICreateHookFormProps,
} from "hook/components/create-hook-form.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";
import { IWorkflowStepProps } from "shared/components/step/workflow-step.component";

interface IProps {
  children?: React.ReactNode;
  workflowProps: IWorkflowStepProps;
  createHookFormProps: ICreateHookFormProps;
  showForm?: boolean;
}
export function StudyHooks(props: IProps) {
  return (
    <ConsumeWorkflowStep showButton={false} {...props.workflowProps}>
      {props.children}
      {props.showForm && <CreateHookForm {...props.createHookFormProps} />}
    </ConsumeWorkflowStep>
  );
}
