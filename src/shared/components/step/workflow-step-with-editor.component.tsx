import { useState } from "react";

import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { IWorkflowStepProps } from "./workflow-step.component";

interface IProps extends IWorkflowStepProps {
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
}
export function WorkflowStep({
  children,
  value,
  setValue,
  placeholder,
  ...rest
}: IProps) {
  const [text, setText] = useState("");

  return (
    <WorkflowStep {...rest}>
      <MarkdownEditor
        value={value ?? text}
        setValue={setValue ?? setText}
        placeholder={placeholder}
      />
    </WorkflowStep>
  );
}
