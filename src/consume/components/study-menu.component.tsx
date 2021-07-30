import { ButtonGroup } from "@chakra-ui/react";
import { TStudyView } from "consume/logic/consume.types";

import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

interface IProps {
  setView: (view: TStudyView) => void;
}
export function StudyMenu(props: IProps) {
  return (
    <WorkflowStep messageContent="Choose an option:">
      <ButtonGroup>
        <Button color="green" onClick={() => props.setView("hooks")}>
          Hooks
        </Button>
        <Button color="green" onClick={() => props.setView("notes")}>
          Notes
        </Button>
        <Button color="green" onClick={() => props.setView("help")}>
          I'm Stuck
        </Button>
      </ButtonGroup>
    </WorkflowStep>
  );
}
