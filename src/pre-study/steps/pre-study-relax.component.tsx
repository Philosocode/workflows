import {
  AspectRatio,
  Box,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { relaxVideoData } from "pre-study/assets/pre-study.data";
import { theme } from "shared/styles/theme";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { Link } from "typography/components/link.component";

export function PreStudyRelax() {
  return (
    <PreStudyWorkflowStep
      message={
        <>
          <Box>
            Take a moment to relax and de-stress. To learn effectively, you want
            to be in a positive, relaxed state of mind.
          </Box>
          <UnorderedList my={theme.spacing.messageBoxSpacing}>
            <ListItem>Start a video below.</ListItem>
            <ListItem>Close your eyes.</ListItem>
            <ListItem>Take long, deep breaths.</ListItem>
            <ListItem>
              Repeat until you're completely calm and relaxed.
            </ListItem>
          </UnorderedList>
          <Box fontSize={theme.typography.fontSize.messageAside}>
            Stress has a negative impact on your ability to learn and remember
            and hurts your creativity. If you want to learn more, read this {}
            <Link href="https://www.nature.com/articles/npjscilearn201611">
              research article.
            </Link>
          </Box>
        </>
      }
    >
      <SimpleGrid columns={2} mb={theme.spacing.workflowStepButtonSpacing}>
        {relaxVideoData.map((video) => (
          <AspectRatio key={video.url}>
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        ))}
      </SimpleGrid>
    </PreStudyWorkflowStep>
  );
}
