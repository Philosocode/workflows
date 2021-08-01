import { useDispatch } from "react-redux";

import { useAppSelector } from "shared/redux/store";
import { nextStep } from "consume/redux/consume.slice";

import { Button } from "shared/components/button.component";
import { Message } from "message/components/message.component";

export function ViewSummary() {
  const materialType = useAppSelector((state) => state.consume.materialType);
  const dispatch = useDispatch();

  const word = materialType === "reading" ? "read" : "watch";

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <>
      <Message>Is there a summary? If so, ${word} it.</Message>
      <Button color="green" onClick={onClick}>
        Next
      </Button>
    </>
  );
}
