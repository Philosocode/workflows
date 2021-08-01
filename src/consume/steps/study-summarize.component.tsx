import { useState, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { ButtonGroup } from "@chakra-ui/react";

import { theme } from "theme";
import { nextStep } from "consume/redux/consume.slice";

import { Button } from "shared/components/button.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { Message } from "message/components/message.component";

interface IProps {
  message: ReactNode;
}
export function StudySummarize(props: IProps) {
  const dispatch = useDispatch();
  const [summary, setSummary] = useState("");

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <>
      <Message>{props.message}</Message>

      <MarkdownEditor
        value={summary}
        setValue={setSummary}
        placeholder="Enter summary"
      />

      <ButtonGroup mt={theme.spacing.nextButtonMarginTop}>
        <Button onClick={onClick} disabled={summary.trim() === ""}>
          Next
        </Button>
      </ButtonGroup>
    </>
  );
}
