import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { Link } from "typography/components/link.component";

export function PreStudyAvoid() {
  return (
    <PreStudyWorkflowStep
      message={
        <>
          <Box>Avoid doing these things:</Box>
          <UnorderedList mb={theme.spacing.messageBoxSpacing}>
            <ListItem>
              Don't highlight or underline text. Instead, practice (flashcards,
              practice problems/tests).
            </ListItem>
            <ListItem>
              Don't re-read your notes or re-watch lecture videos. Instead, find
              a different material / lecture on the same topic.
            </ListItem>
          </UnorderedList>
          <Box fontSize={theme.typography.fontSize.messageAside}>
            <Link href="https://www.sciencedirect.com/science/article/pii/S2211368120300279">
              This research article
            </Link>
            {} goes over effective and ineffective study strategies.
          </Box>
        </>
      }
    />
  );
}
