import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

export function StudyQuestions() {
  return (
    <ConsumeWorkflowStep
      message={
        <>
          <Box>
            Next, let's go through some questions. As you do, think about:
          </Box>
          <UnorderedList>
            <ListItem>What you just learned.</ListItem>
            <ListItem>Any ideas or concepts you found difficult.</ListItem>
          </UnorderedList>
        </>
      }
    ></ConsumeWorkflowStep>
  );
}
