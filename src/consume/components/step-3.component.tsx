import { Box, Link } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { nextStep } from "consume/logic/consume.slice";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

export function Step3() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <WorkflowStep
      messageContent={
        <>
          <Box>
            Start a Pomodoro timer. Use a site like{" "}
            <Link color="green.500" href="https://pomofocus.io" isExternal>
              https://pomofocus.io
            </Link>
            .
          </Box>
          <br />
          <Box>
            To learn more about the Pomodoro method, you can check out{" "}
            <Link
              color="green.500"
              href="https://todoist.com/productivity-methods/pomodoro-technique"
              isExternal
            >
              this link
            </Link>
            .
          </Box>
        </>
      }
    >
      <Button color="green" onClick={onClick}>
        Next
      </Button>
    </WorkflowStep>
  );
}
