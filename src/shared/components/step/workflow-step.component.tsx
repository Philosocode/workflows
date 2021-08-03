import { ReactNode } from "react";
import { ButtonProps } from "@chakra-ui/react";

import { Button } from "shared/components/button/button.component";
import { Message } from "message/components/message.component";
import { useKeypress } from "shared/hooks/use-key-press.hook";

export interface IWorkflowStepProps {
  message: ReactNode;

  buttons?: ReactNode;
  buttonProps?: ButtonProps;
  children?: ReactNode;
  keyPressDisabled?: true;
}
interface IProps extends IWorkflowStepProps {
  onNext: () => void;
}
export function WorkflowStep(props: IProps) {
  useKeypress("ArrowRight", props.onNext, props.keyPressDisabled ?? false);

  return (
    <>
      <Message>{props.message}</Message>
      {props.children}
      {props.buttons}
      {!props.buttons && (
        <Button children="Next" onClick={props.onNext} {...props.buttonProps} />
      )}
    </>
  );
}
