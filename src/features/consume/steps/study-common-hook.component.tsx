import { useHistory } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { allHooks } from "features/hooks/data/hooks.data";
import { useAppSelector } from "shared/redux/store";
import { selectNextStep } from "features/step/step.slice";
import { useHookStore } from "features/hooks/logic/hook.store";

import { ConsumeWorkflowStep } from "features/consume/components/consume-workflow-step.component";

interface IProps {
  hookId: string;
  questionNum: number;
}
export function StudyCommonHook(props: IProps) {
  const history = useHistory();
  const { toggleCompletedId } = useHookStore();
  const hook = allHooks[props.hookId];
  const nextStep = useAppSelector(selectNextStep);

  function handleComplete() {
    toggleCompletedId(props.hookId);
    handleNext();
  }

  function handleNext() {
    history.push(`/consume/${nextStep}`);
  }

  return (
    <ConsumeWorkflowStep
      buttons={
        <ButtonGroup spacing={5}>
          <Button colorScheme="green" onClick={handleComplete}>
            Next
          </Button>
          <Button onClick={handleNext}>Skip</Button>
        </ButtonGroup>
      }
      message={`Question ${props.questionNum}: ${hook.prompt}`}
    />
  );
}
