import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, ButtonGroup } from "@chakra-ui/react";

import { nextStep } from "consume/redux/consume.slice";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";

export function PreStudySummarize() {
  const dispatch = useDispatch();
  const [summary, setSummary] = useState("");

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <WorkflowStep
      messageContent={
        <>
          <Box>Summarize everything you've learned so far.</Box>
          <Box>Try to do it from memory, without looking at the material.</Box>
        </>
      }
    >
      <MarkdownEditor
        value={summary}
        setValue={setSummary}
        placeholder="Enter summary"
      />
      <ButtonGroup mt={5}>
        <Button
          color="green"
          onClick={onClick}
          disabled={summary.trim() === ""}
        >
          Okay
        </Button>
      </ButtonGroup>
    </WorkflowStep>
  );
}
