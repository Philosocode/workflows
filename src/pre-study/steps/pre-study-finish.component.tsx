import { Box } from "@chakra-ui/react";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { useHistory } from "react-router-dom";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";

export function PreStudyFinish() {
  const history = useHistory();

  return (
    <PreStudyWorkflowStep
      keyPressDisabled
      buttons={
        <CardButtonGrid>
          <CardButton color="green" onClick={() => history.push("/")}>
            Exit
          </CardButton>
          <CardButton onClick={() => history.push("/pre-study/1")}>
            Restart
          </CardButton>
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
