import { Box } from "@chakra-ui/react";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";

export function SkimReminder() {
  return (
    <ConsumeWorkflowStep
      message={
        <>
          <Box>Skim through the material.</Box>
          <Box>Pay attention to headings, images, and questions.</Box>
        </>
      }
    />
  );
}
