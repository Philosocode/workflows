import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingStart() {
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <ProblemSolvingWorkflowStep
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid>
          <CardButton
            color="green"
            onClick={() => history.push("/problem-solving/2")}
          >
            Begin
          </CardButton>
          <CardButton onClick={() => history.push(redirectUrl)}>
            Go Back
          </CardButton>
        </CardButtonGrid>
      }
      message={
        <Messages>
          <Box>
            Welcome! This is a workflow to help programmers solve difficult
            problems.
          </Box>
          <Box>
            It's much more in-depth compared to Rubber Duck Debugging. If your
            problem isn't too complicated, you should try that first!
          </Box>
        </Messages>
      }
    />
  );
}
