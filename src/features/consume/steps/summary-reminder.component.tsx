import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { selectMaterialType } from "features/consume/redux/consume.selectors";
import { selectNextStep } from "features/step/step.slice";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Messages } from "shared/components/message/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";

export function SummaryReminder() {
  const materialType = useAppSelector(selectMaterialType);
  const [hasSummary, toggleHasSummary] = useToggle();
  const word = materialType === "reading" ? "Read" : "Watch";
  const nextStep = useAppSelector(selectNextStep);

  return (
    <ConsumeWorkflowStep
      message={
        <Messages>
          {!hasSummary && <Box>Is there a summary page or section?</Box>}
          {hasSummary && (
            <Box>{word} the summary if you haven't already done so.</Box>
          )}
        </Messages>
      }
      showButton={hasSummary === true}
    >
      {!hasSummary && (
        <CardButtonGrid
          buttons={[
            { text: "Yes", onClick: toggleHasSummary },
            {
              text: "No",
              to: `/consume/${nextStep}`,
            },
          ]}
        />
      )}
    </ConsumeWorkflowStep>
  );
}