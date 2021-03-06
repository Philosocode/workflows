import { ReactNode, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ButtonProps } from "@chakra-ui/react";

import { useKeypress } from "shared/hooks/use-key-press.hook";
import { theme } from "shared/styles/theme";

import {
  IMessageProps,
  Message,
} from "shared/components/message/message.component";
import { Button } from "shared/components/button/button.component";
import { Buttons } from "../button/buttons.component";
import { Breadcrumbs } from "shared/components/breadcrumbs/breadcrumbs.component";
import { MarkdownEditor } from "shared/components/editor/markdown-editor.component";
import { ProgressBar } from "../progress/progress-bar.component";

export interface IWorkflowStepProps {
  message: ReactNode;

  breadcrumbLinks?: string[];
  buttons?: ReactNode;
  buttonText?: string;
  buttonProps?: ButtonProps;
  extraButtons?: ReactNode;
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
  progress?: {
    currentValue: number;
    maxValue: number;
  };
}
export function WorkflowStep(props: IWorkflowStepProps) {
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
      {props.breadcrumbLinks && (
        <Breadcrumbs breadcrumbLinks={props.breadcrumbLinks} />
      )}
      {props.progress && (
        <ProgressBar
          currentValue={props.progress.currentValue}
          maxValue={props.progress.maxValue}
          mb={{ base: 3, md: 5 }}
        />
      )}
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
        <Buttons
          mt={
            props.editor?.showEditor
              ? theme.spacing.workflowStepButtonSpacing
              : 0
          }
        >
          <Link to={props.nextUrl}>
            <Button
              children={props.buttonText ?? "Next"}
              colorScheme="green"
              disabled={buttonDisabled}
              {...props.buttonProps}
            />
          </Link>
          {props.extraButtons}
        </Buttons>
      )}
    </>
  );
}
