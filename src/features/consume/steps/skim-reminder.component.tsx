import { Box } from "@chakra-ui/react";

import { useConsumeStore } from "../logic/consume.store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

export function SkimReminder() {
  const { materialType } = useConsumeStore();

  return (
    <ConsumeWorkflowStep
      message={
        <>
          <Box>Skim through the material.</Box>
          {materialType === "reading" && (
            <Box>Pay attention to headings, images, and questions.</Box>
          )}
        </>
      }
    />
  );
}
