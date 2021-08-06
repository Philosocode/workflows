import { ReactNode, useState } from "react";
import { ButtonProps } from "@chakra-ui/react";

import { IMessageProps, Message } from "message/components/message.component";
import { useKeypress } from "shared/hooks/use-key-press.hook";
import { Button } from "shared/components/button/button.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { theme } from "shared/styles/theme";
import { Link, useHistory } from "react-router-dom";

export interface IWorkflowStepProps {
  message: ReactNode;

  buttons?: ReactNode;
  buttonText?: string;
  buttonProps?: ButtonProps;
  showButton?: boolean;
  children?: ReactNode;
  editor?: {
    showEditor?: boolean;
    value?: string;
    setValue?: (value: string) => void;
    placeholder?: string;
  };
  keyPressDisabled?: boolean;
  messageProps?: IMessageProps;
  nextUrl?: string;
}
interface IProps extends IWorkflowStepProps {}
export function WorkflowStep(props: IProps) {
  const [text, setText] = useState("");
  const history = useHistory();
  const showDefaultButton = props.showButton ?? true;

  useKeypress(
    "ArrowRight",
    () => history.push(props.nextUrl ?? "/"),
    (props.editor?.showEditor || props.keyPressDisabled) ?? false,
  );

  const editorValue = props.editor?.value ?? text;
  let buttonDisabled = false;
  if (props.editor?.showEditor && editorValue.trim() === "")
    buttonDisabled = true;

  return (
    <>
      <Message {...props.messageProps}>{props.message}</Message>

      {props.editor && props.editor.showEditor && (
        <MarkdownEditor
          value={editorValue}
          setValue={props.editor.setValue ?? setText}
          placeholder={props.editor.placeholder}
        />
      )}

      {props.children}

      {props.buttons}
      {!props.buttons && showDefaultButton && props.nextUrl && (
        <Link to={props.nextUrl}>
          <Button
            children={props.buttonText ?? "Next"}
            mt={
              props.editor?.showEditor
                ? theme.spacing.workflowStepButtonSpacing
                : 0
            }
            disabled={buttonDisabled}
            {...props.buttonProps}
          />
        </Link>
      )}
    </>
  );
}
