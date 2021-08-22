import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useLocationStore } from "features/location/location.store";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";
import { CardButton } from "shared/components/button/card-button.component";

export function PreStudyReminder() {
  const { currentStep } = useLocationStore();
  const nextUrl = `/consume/${currentStep + 1}`;

  return (
    <ConsumeWorkflowStep
      showButton={false}
      message={
        <>
          <Box>Do you want to do the Pre-Study routine?</Box>
          <Box>I'd recommend going through it before each study session.</Box>
          <Box
            fontSize={theme.typography.fontSize.messageAside}
            mt={theme.spacing.messageBoxSpacing}
          >
            After the routine, you'll be redirected back here.
          </Box>
        </>
      }
    >
      <CardButtonGrid>
        <Link to={{ pathname: "/pre-study/2", state: { from: "/consume/3" } }}>
          <CardButton color="green">Yes</CardButton>
        </Link>
        <Link to={nextUrl}>
          <CardButton>No</CardButton>
        </Link>
      </CardButtonGrid>
    </ConsumeWorkflowStep>
  );
}
