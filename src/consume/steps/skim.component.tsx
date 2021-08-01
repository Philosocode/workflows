import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";

import { nextStep } from "consume/redux/consume.slice";
import { Button } from "shared/components/button.component";
import { Message } from "message/components/message.component";

export function Skim() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <>
      <Message>
        <Box>Skim through the material.</Box>
        <Box>Pay attention to headings, images, and questions.</Box>
      </Message>
      <Button color="green" onClick={onClick}>
        Next
      </Button>
    </>
  );
}
