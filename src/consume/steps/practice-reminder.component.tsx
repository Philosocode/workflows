import { Box } from "@chakra-ui/react";

import { ConsumeMessageButtonStep } from "consume/components/consume-message-button-step.component";
import { Messages } from "message/components/messages.component";

export function PracticeReminder() {
  return (
    <ConsumeMessageButtonStep
      message={
        <Messages>
          <Box>
            Is this your first time encountering this subject or topic? If so,
            find some practice problems and do them.
          </Box>
          <Box>
            You might be thinking, "I don't know anything about this subject!"
          </Box>
          <Box>
            That's okay! Even if you get all the questions wrong, it prepares
            your mind for learning the new information.
          </Box>
        </Messages>
      }
    />
  );
}
