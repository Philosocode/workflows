import { useState, ReactNode } from "react";

import { theme } from "shared/styles/theme";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";

interface IProps {
  message: ReactNode;
}
export function StudySummarize(props: IProps) {
  const [summary, setSummary] = useState("");

  return (
    <ConsumeWorkflowStep
      message={props.message}
      keyPressDisabled
      buttonProps={{
        disabled: summary.trim() === "",
        mt: theme.spacing.nextButtonMarginTop,
      }}
    >
      <MarkdownEditor
        value={summary}
        setValue={setSummary}
        placeholder="Enter summary"
      />
    </ConsumeWorkflowStep>
  );
}
