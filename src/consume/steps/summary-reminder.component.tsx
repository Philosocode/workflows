import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectMaterialType } from "consume/redux/consume.selectors";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Redirect } from "react-router-dom";
import { selectNextStep } from "step/step.slice";

export function SummaryReminder() {
  const materialType = useAppSelector(selectMaterialType);
  const [hasSummary, setHasSummary] = useState<boolean>();
  const word = materialType === "reading" ? "Read" : "Watch";
  const nextStep = useAppSelector(selectNextStep);

  if (hasSummary === false) return <Redirect to={`/consume/${nextStep}`} />;
  return (
    <ConsumeWorkflowStep
      message={
        <Messages>
          <Box>Is there a summary page?</Box>
          {hasSummary && <Box>{word} it if you haven't already done so.</Box>}
        </Messages>
      }
      buttonText="Done Reading"
      showButton={hasSummary === true}
    >
      {!hasSummary && (
        <CardButtonGrid>
          <CardButton color="gray" onClick={() => setHasSummary(true)}>
            Yes
          </CardButton>
          <CardButton color="gray" onClick={() => setHasSummary(false)}>
            No
          </CardButton>
        </CardButtonGrid>
      )}
    </ConsumeWorkflowStep>
  );
}
