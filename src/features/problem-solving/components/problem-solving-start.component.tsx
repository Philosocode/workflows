import { Box } from "@chakra-ui/react";

import { Messages } from "shared/components/message/messages.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingStart() {
  return (
    <ProblemSolvingWorkflowStep
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid
          buttons={[
            { text: "Begin", color: "green", to: "/problem-solving/2" },
            { text: "Go Back", to: "/get-unstuck" },
          ]}
        />
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
