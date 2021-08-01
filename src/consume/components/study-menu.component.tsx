import { ButtonGroup } from "@chakra-ui/react";

import { TStudyView } from "consume/redux/consume.types";
import { Button } from "shared/components/button/button.component";
import { Message } from "message/components/message.component";

interface IProps {
  setView: (view: TStudyView) => void;
  goToSummary: () => void;
}
export function StudyMenu(props: IProps) {
  return (
    <>
      <Message>Choose an option:</Message>
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
        <Button color="green" onClick={props.goToSummary}>
          I'm Done
        </Button>
      </ButtonGroup>
    </>
  );
}
