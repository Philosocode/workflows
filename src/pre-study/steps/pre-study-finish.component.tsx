import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

export function PreStudyFinish() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <PreStudyWorkflowStep
      keyPressDisabled
      buttons={
        <CardButtonGrid>
          <Link to={redirectUrl}>
            <CardButton color="green">Exit</CardButton>
          </Link>
          <Link to="/pre-study/1">
            <CardButton>Restart</CardButton>
          </Link>
        </CardButtonGrid>
      }
      message={
        <>
          <Box>That's all for now. Good luck with studying!</Box>
        </>
      }
    />
  );
}
