import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "shared/redux/store";
import { nextStep } from "consume/redux/consume.slice";
import { selectMaterialType } from "consume/redux/consume.selectors";

import { Button } from "shared/components/button.component";
import { Message } from "message/components/message.component";

export function GoSlowly() {
  const dispatch = useDispatch();
  const materialType = useAppSelector(selectMaterialType);
  const word = materialType === "reading" ? "Read" : "Watch";

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <>
      <Message>
        <Box>{word} the material slowly. Don't rush through it.</Box>
        <Box>
          Think of it like this: you can only {word.toLowerCase()} this material
          once. Once you're done, you can no longer {word.toLowerCase()} it
          again.
        </Box>
      </Message>
      <Button onClick={onClick}>Okay</Button>
    </>
  );
}
