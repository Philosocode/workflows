import { Box } from "@chakra-ui/react";

import { PreStudyWorkflowStep } from "features/pre-study/components/pre-study-workflow-step.component";

export function PreStudyStart() {
  return (
    <PreStudyWorkflowStep
      message={
        <Box>
          This workflow will help you get into the right mindset for studying.
          I'd recommend doing this before you start studying.
        </Box>
      }
    />
  );
}
