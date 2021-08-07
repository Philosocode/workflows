import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { Messages } from "message/components/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingStart() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <ProblemSolvingWorkflowStep
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid>
          <Link to="/problem-solving/2">
            <CardButton color="green">Begin</CardButton>
          </Link>
          <Link to={redirectUrl}>
            <CardButton>Go Back</CardButton>
          </Link>
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
