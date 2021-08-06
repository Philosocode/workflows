import {
  AspectRatio,
  Box,
  ListItem,
  OrderedList,
  SimpleGrid,
} from "@chakra-ui/react";
import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";

import { theme } from "shared/styles/theme";
import { Link } from "typography/components/link.component";

const videoData = [
  {
    url: "https://www.youtube.com/embed/yIQd2Ya0Ziw",
    title: "Rainstorm",
  },
  { url: "https://www.youtube.com/embed/xNN7iTA57jM", title: "Forest" },
  { url: "https://www.youtube.com/embed/JekUNGo-RVk", title: "Ocean" },
  { url: "https://www.youtube.com/embed/-ax9ogqG8FE", title: "Japan" },
];

export function PreStudyRelax() {
  return (
    <PreStudyWorkflowStep
      message={
        <>
          <Box>Take a moment to relax.</Box>
          <OrderedList my={theme.spacing.messageBoxSpacing}>
            <ListItem>Start a video below.</ListItem>
            <ListItem>Close your eyes.</ListItem>
            <ListItem>Breathe deeply.</ListItem>
            <ListItem>
              Repeat until you're completely calm and relaxed.
            </ListItem>
          </OrderedList>
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
        {videoData.map((video) => (
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
