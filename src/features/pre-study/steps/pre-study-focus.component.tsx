import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { PreStudyWorkflowStep } from "features/pre-study/components/pre-study-workflow-step.component";
import { Link } from "shared/components/typography/link.component";

export function PreStudyFocus() {
  return (
    <PreStudyWorkflowStep
      message={
        <>
          <Box>Let's start with your study environment.</Box>
          <UnorderedList mb={theme.spacing.messageBoxSpacing}>
            <ListItem>Find a quiet, distraction-free place to study</ListItem>
            <ListItem>
              Remove all distractions. Put your phone somewhere else. Avoid
              social media.
            </ListItem>
            <ListItem>
              Don't multitask. Focus completely on your study material.
            </ListItem>
          </UnorderedList>
          <Box>
            By achieving a deep state of focus, you can maximize how much you
            learn and understand.
          </Box>
          <Box
            fontSize={theme.typography.fontSize.messageAside}
            mt={theme.spacing.messageBoxSpacing}
          >
            If you want to learn more, check out {}
            <Link href="https://www.youtube.com/watch?v=2ybOJMibAbA" isExternal>
              this video.
            </Link>
            {} Better yet, {}
            <Link
              href="https://www.amazon.ca/Deep-Work-Focused-Success-Distracted/dp/1455586692"
              isExternal
            >
              read this book.
            </Link>
          </Box>
        </>
      }
    />
  );
}
