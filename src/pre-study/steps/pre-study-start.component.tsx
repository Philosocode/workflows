import { Box } from "@chakra-ui/react";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";

export function PreStudyStart() {
  useSetRedirectUrl();

  return (
    <PreStudyWorkflowStep
      message={
        <>
          <Box>
            This workflow will help you get into the right mindset for studying.
            I'd recommend doing this before you start studying.
          </Box>
        </>
      }
    />
  );
}
