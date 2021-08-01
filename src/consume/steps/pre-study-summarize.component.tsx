import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, ButtonGroup } from "@chakra-ui/react";

import { nextStep } from "consume/redux/consume.slice";
import { Button } from "shared/components/button.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { Message } from "message/components/message.component";
import { theme } from "theme";

export function PreStudySummarize() {
  const dispatch = useDispatch();
  const [summary, setSummary] = useState("");

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <>
      <Message>
        <Box>Summarize everything you've learned so far.</Box>
        <Box>Try to do it from memory, without looking at the material.</Box>
      </Message>

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
