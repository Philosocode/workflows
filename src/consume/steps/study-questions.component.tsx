import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { theme } from "shared/styles/theme";

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
          <Box mt={theme.spacing.messageBoxSpacing}>
            For each question, feel free to write your thoughts in the provided
            textarea.
          </Box>
        </>
      }
    ></ConsumeWorkflowStep>
  );
}
