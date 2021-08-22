import { useState } from "react";
import { useHistory } from "react-router-dom";

import { allHooks } from "features/hooks/data/hooks.data";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useLocationStore } from "features/location/location.store";
import { theme } from "shared/styles/theme";

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

  const [editorText, setEditorText] = useState("");

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
        <Buttons mt={theme.spacing.workflowStepButtonSpacing}>
          <Button
            colorScheme="green"
            disabled={editorText.trim() === ""}
            onClick={handleComplete}
          >
            Next
          </Button>
          <Button onClick={handleNext}>Skip</Button>
        </Buttons>
      }
      editor={{
        showEditor: true,
        value: editorText,
        setValue: setEditorText,
        placeholder: "Write out your thoughts here...",
      }}
      message={`Question ${props.questionNum}: ${hook.prompt}`}
    />
  );
}
