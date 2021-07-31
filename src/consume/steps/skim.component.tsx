import { useDispatch } from "react-redux";

import { nextStep } from "consume/logic/consume.slice";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

export function Skim() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(nextStep());
  }

  return (
    <WorkflowStep
      messageContent={
        <>
          Skim through the material.
          <br />
          Pay attention to headings, images, and questions.
        </>
      }
    >
      <Button color="green" onClick={onClick}>
        Next
      </Button>
    </WorkflowStep>
  );
}
