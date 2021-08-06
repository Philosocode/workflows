import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { Link } from "typography/components/link.component";

export function PreStudyTips() {
  return (
    <PreStudyWorkflowStep
      message={
        <>
          <Box>Here are some good things to do:</Box>
          <UnorderedList mb={theme.spacing.messageBoxSpacing}>
            <ListItem>
              Spend most of your time on things you find difficult and struggle
              with. If something is easy, move on to something else.
            </ListItem>
            <ListItem>
              Take regular breaks. Don't study for hours on end without a break.
              Use a Pomodoro timer.
            </ListItem>
          </UnorderedList>
          <Box fontSize={theme.typography.fontSize.messageAside}>
            For other great tips, check out {}
            <Link href="https://betterhumans.pub/how-to-unlock-the-amazing-power-of-your-brain-and-become-a-top-student-369e5ba59484?">
              this Medium article.
            </Link>
          </Box>
        </>
      }
    />
  );
}
