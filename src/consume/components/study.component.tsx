import { useDispatch } from "react-redux";

import { nextStep } from "consume/logic/consume.slice";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

export function Study() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <WorkflowStep messageContent={"Test"}>
      <Button color="green" onClick={onClick}>
        Next
      </Button>
    </WorkflowStep>
  );
}
