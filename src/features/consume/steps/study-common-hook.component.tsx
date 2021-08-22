import { useHistory } from "react-router-dom";

import { allHooks } from "features/hooks/data/hooks.data";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useLocationStore } from "features/location/location.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

interface IProps {
  hookId: string;
  questionNum: number;
}
export function StudyCommonHook(props: IProps) {
  const history = useHistory();
  const { toggleCompletedId } = useHookStore();
  const hook = allHooks[props.hookId];
  const { currentStep } = useLocationStore();

  function handleComplete() {
    toggleCompletedId(props.hookId);
    handleNext();
  }

  function handleNext() {
    history.push(`/consume/${currentStep + 1}`);
  }

  return (
    <ConsumeWorkflowStep
      buttons={
        <Buttons>
          <Button colorScheme="green" onClick={handleComplete}>
            Next
          </Button>
          <Button onClick={handleNext}>Skip</Button>
        </Buttons>
      }
      message={`Question ${props.questionNum}: ${hook.prompt}`}
    />
  );
}
