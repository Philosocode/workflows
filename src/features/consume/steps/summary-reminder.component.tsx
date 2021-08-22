import { Box } from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { useLocationStore } from "features/location/location.store";
import { useConsumeStore } from "../logic/consume.store";
import { selectMaterialWord } from "../logic/consume.selectors";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { Messages } from "shared/components/message/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";

export function SummaryReminder() {
  const word = useConsumeStore(selectMaterialWord);
  const [hasSummary, toggleHasSummary] = useToggle();
  const { currentStep } = useLocationStore();

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
              to: `/consume/${currentStep + 1}`,
            },
          ]}
        />
      )}
    </ConsumeWorkflowStep>
  );
}
