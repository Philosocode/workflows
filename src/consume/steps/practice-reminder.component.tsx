import { Box, VStack } from "@chakra-ui/react";

import { ConsumeMessageButtonStep } from "consume/components/consume-message-button-step.component";

export function PracticeReminder() {
  return (
    <ConsumeMessageButtonStep>
      <VStack spacing={10}>
        <Box>
          Is this your first time encountering this subject or topic? If so,
          find some practice problems and do them.
        </Box>
        <Box>
          You might be thinking, "I don't know anything about this subject!"
        </Box>
        <Box>
          That's okay! Even if you get all the questions wrong, it prepares your
          mind for learning the new information.
        </Box>
      </VStack>
    </ConsumeMessageButtonStep>
  );
}
