import { useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ButtonGroup } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { nextStep } from "consume/redux/consume.slice";

import { Button } from "shared/components/button/button.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { Message } from "message/components/message.component";
import { useAppSelector } from "shared/redux/store";
import { selectStep } from "consume/redux/consume.selectors";
import { ConsumeMessageButtonStep } from "consume/components/consume-message-button-step.component";

interface IProps {
  message: ReactNode;
}
export function StudySummarize(props: IProps) {
  const [summary, setSummary] = useState("");

  return (
    <ConsumeMessageButtonStep
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
    </ConsumeMessageButtonStep>
  );
}
