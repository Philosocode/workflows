import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectMaterialType } from "consume/redux/consume.selectors";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";

export function SlowReminder() {
  const materialType = useAppSelector(selectMaterialType);
  const word = materialType === "reading" ? "Read" : "Watch";

  return (
    <ConsumeWorkflowStep
      message={
        <>
          <Box>{word} the material slowly. Don't rush through it.</Box>
          <Box>
            Think of it like this: you can only {word.toLowerCase()} this
            material once. Once you're done, you can no longer{" "}
            {word.toLowerCase()} it again.
          </Box>
        </>
      }
    />
  );
}
