import { Box } from "@chakra-ui/react";

import { ConsumeMessageButtonStep } from "consume/components/consume-message-button-step.component";

export function SkimReminder() {
  return (
    <ConsumeMessageButtonStep>
      <Box>Skim through the material.</Box>
      <Box>Pay attention to headings, images, and questions.</Box>
    </ConsumeMessageButtonStep>
  );
}
