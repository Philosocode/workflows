import { Box } from "@chakra-ui/react";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Messages } from "shared/components/message/messages.component";
import { useConsumeStore } from "../logic/consume.store";
import { selectMaterialWord } from "../logic/consume.selectors";

export function SlowReminder() {
  const word = useConsumeStore(selectMaterialWord);
  const lowerWord = word.toLowerCase();

  return (
    <ConsumeWorkflowStep
      message={
        <Messages>
          <Box>{word} the material slowly. Don't rush through it.</Box>
          <Box>
            Think of it like this: you can only {lowerWord} this material once.
            Once you're done, you can no longer {}
            {lowerWord} it again.
          </Box>
        </Messages>
      }
    />
  );
}
