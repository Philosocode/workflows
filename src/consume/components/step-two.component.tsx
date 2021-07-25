import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "app/hooks";
import { nextStep } from "consume/logic/consume.slice";
import { Button } from "shared/components/button.component";
import { Message } from "message/components/message.component";

export function StepTwo() {
  const dispatch = useDispatch();
  const materialType = useAppSelector((state) => state.consume.materialType);
  const word = materialType === "reading" ? "Read" : "Watch";

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <Box>
      <Message>
        <Box>{word} the material slowly. Don't rush through it.</Box>
        <Box>
          Think of it like this: you can only {word.toLowerCase()} this material
          once. Once you're done, you can no longer {word.toLowerCase()} it
          again.
        </Box>
      </Message>
      <Button color="green" onClick={onClick}>
        Okay
      </Button>
    </Box>
  );
}
