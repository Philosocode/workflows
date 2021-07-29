import { useDispatch } from "react-redux";

import { nextStep } from "consume/logic/consume.slice";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { useAppSelector } from "shared/redux/store";

export function ViewSummary() {
  const materialType = useAppSelector((state) => state.consume.materialType);
  const dispatch = useDispatch();

  const word = materialType === "reading" ? "read" : "watch";

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <WorkflowStep messageContent={`Is there a summary? If so, ${word} it.`}>
      <Button color="green" onClick={onClick}>
        Next
      </Button>
    </WorkflowStep>
  );
}
