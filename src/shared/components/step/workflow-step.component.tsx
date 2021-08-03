import { ReactNode, useState } from "react";
import { ButtonProps } from "@chakra-ui/react";

import { IMessageProps, Message } from "message/components/message.component";
import { useKeypress } from "shared/hooks/use-key-press.hook";
import { Button } from "shared/components/button/button.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";

export interface IWorkflowStepProps {
  message: ReactNode;

  buttons?: ReactNode;
  buttonProps?: ButtonProps;
  children?: ReactNode;
  editor?: {
    showEditor?: boolean;
    value?: string;
    setValue?: (value: string) => void;
    placeholder?: string;
  };
  keyPressDisabled?: boolean;
  messageProps?: IMessageProps;
}
interface IProps extends IWorkflowStepProps {
  onNext: () => void;
}
export function WorkflowStep(props: IProps) {
  const [text, setText] = useState("");
  useKeypress("ArrowRight", props.onNext, props.keyPressDisabled ?? false);

  return (
    <>
      <Message {...props.messageProps}>{props.message}</Message>

      {props.editor && props.editor.showEditor && (
        <MarkdownEditor
          value={props.editor.value ?? text}
          setValue={props.editor.setValue ?? setText}
          placeholder={props.editor.placeholder}
        />
      )}

      {props.children}

      {props.buttons}
      {!props.buttons && (
        <Button children="Next" onClick={props.onNext} {...props.buttonProps} />
      )}
    </>
  );
}
