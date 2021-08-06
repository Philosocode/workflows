import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";
import { PreStudyFocus } from "pre-study/steps/pre-study-focus.component";
import { PreStudyRelax } from "pre-study/steps/pre-study-relax.component";
import { PreStudyTimer } from "pre-study/steps/pre-study-timer.component";

export const preStudyRoutes = [
  { component: PreStudyFocus },
  { component: PreStudyRelax },
  { component: PreStudyTimer },
];

export const preStudyMessages = [
  <>
    <Box>When it comes to studying, here are some don'ts:</Box>
    <UnorderedList mb={theme.spacing.messageBoxSpacing}>
      <ListItem>Don't study for hours on end without a break.</ListItem>
      <ListItem>Don't highlight or underline text.</ListItem>
    </UnorderedList>
  </>,
];
