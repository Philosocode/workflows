import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { nextStep } from "consume/redux/consume.slice";
import { Button } from "shared/components/button.component";
import { Message } from "message/components/message.component";
import { Link } from "typography/components/link.component";

export function TimerReminder() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <>
      <Message>
        <Box>
          Start a Pomodoro timer. Use a site like {}
          <Link href="https://pomofocus.io" isExternal>
            https://pomofocus.io.
          </Link>
        </Box>
        <Box pt={10}>
          To learn more about the Pomodoro method, check out {}
          <Link
            href="https://todoist.com/productivity-methods/pomodoro-technique"
            isExternal
          >
            this link.
          </Link>
        </Box>
      </Message>
      <Button onClick={onClick}>Next</Button>
    </>
  );
}
