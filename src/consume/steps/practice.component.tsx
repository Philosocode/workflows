import { useDispatch } from "react-redux";

import { nextStep } from "consume/redux/consume.slice";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { Box } from "@chakra-ui/react";

export function Practice() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <WorkflowStep
      messageContent={
        <>
          <Box>
            Is this your first time encountering this subject / topic? If so,
            find some practice problems and do them.
          </Box>
          <Box pt={10}>
            But you might say, "I don't know anything about this subject!""
          </Box>
          <Box pt={10}>
            That's okay! Even if you get all the questions wrong, it prepares
            your mind for learning the new information.
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
