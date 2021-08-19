import { Box } from "@chakra-ui/react";

import { selectMaterialType } from "features/consume/redux/consume.selectors";
import { useAppSelector } from "shared/redux/store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

export function SkimReminder() {
  const materialType = useAppSelector(selectMaterialType);

  return (
    <ConsumeWorkflowStep
      message={
        <>
          <Box>Skim through the material.</Box>
          {materialType === "reading" && (
            <Box>Pay attention to headings, images, and questions.</Box>
          )}
        </>
      }
    />
  );
}
