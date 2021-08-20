import { selectMaterialType } from "features/consume/redux/consume.selectors";
import { useAppSelector } from "shared/redux/store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Box } from "@chakra-ui/react";

export function StudyStart() {
  const materialType = useAppSelector(selectMaterialType);
  const word = materialType === "reading" ? "Read" : "Watch";
  const readingMessage =
    "Read for a few minutes minutes (e.g. 1-2 paragraphs or 1 page).";
  const watchMessage = "Watch for a few minutes.";

  return (
    <ConsumeWorkflowStep
      message={
        <>
          <Box>Time to start {word.toLowerCase()}ing.</Box>
          <Box>
            {materialType === "reading" ? readingMessage : watchMessage}
          </Box>
        </>
      }
    ></ConsumeWorkflowStep>
  );
}
