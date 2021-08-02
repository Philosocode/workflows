import { ReactNode } from "react";
import { ButtonProps } from "@chakra-ui/react";

import { Button } from "shared/components/button/button.component";
import { Message } from "message/components/message.component";
import { useKeypress } from "shared/hooks/use-key-press.hook";
import { theme } from "shared/styles/theme";

export interface IMessageButtonStepProps {
  message: ReactNode;

  buttonProps?: ButtonProps;
  children?: ReactNode;
  keyPressDisabled?: true;
}
interface IProps extends IMessageButtonStepProps {
  onNext: () => void;
}
export function MessageButtonStep(props: IProps) {
  useKeypress("ArrowRight", props.onNext, props.keyPressDisabled ?? false);

  return (
    <>
      <Message>{props.message}</Message>
      {props.children}
      <Button children="Next" onClick={props.onNext} {...props.buttonProps} />
    </>
  );
}
