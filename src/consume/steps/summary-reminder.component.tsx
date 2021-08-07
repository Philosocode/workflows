import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectMaterialType } from "consume/redux/consume.selectors";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Link } from "react-router-dom";

export function SummaryReminder() {
  const materialType = useAppSelector(selectMaterialType);
  const [hasSummary, setHasSummary] = useState<boolean>();
  const word = materialType === "reading" ? "Read" : "Watch";
  const nextStep = useAppSelector(selectNextStep);

  return (
    <ConsumeWorkflowStep
      message={
        <Messages>
          {hasSummary === undefined && <Box>Is there a summary page?</Box>}
          {hasSummary && (
            <Box>{word} the summary if you haven't already done so.</Box>
          )}
        </Messages>
      }
      showButton={hasSummary === true}
    >
      {!hasSummary && (
        <CardButtonGrid>
          <CardButton onClick={() => setHasSummary(true)}>Yes</CardButton>
          <Link to={`/consume/${nextStep}`}>
            <CardButton>No</CardButton>
          </Link>
        </CardButtonGrid>
      )}
    </ConsumeWorkflowStep>
  );
}
