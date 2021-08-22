import { Box } from "@chakra-ui/react";

import { useConsumeStore } from "../logic/consume.store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

export function StudyStart() {
  const { materialType } = useConsumeStore();

  return (
    <ConsumeWorkflowStep
      message={
        materialType === "reading" ? (
          <>
            <Box>Time to start reading.</Box>
            <Box>Read for a few minutes (1-2 paragraphs, 1 page, etc).</Box>
          </>
        ) : (
          <Box>Watch for a few minutes.</Box>
        )
      }
    />
  );
}
