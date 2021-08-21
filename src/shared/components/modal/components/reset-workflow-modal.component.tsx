import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { IModalProps } from "../shared/modal.types";

interface IProps extends IModalProps {
  handleReset: () => void;
}
export function ResetWorkflowModal(props: IProps) {
  function onReset() {
    props.handleReset();
    props.handleClose();
  }

  const footer = (
    <Buttons>
      <Button colorScheme="red" onClick={onReset}>
        Reset
      </Button>
      <Button onClick={props.handleClose}>Cancel</Button>
    </Buttons>
  );

  return (
    <ModalWrapper isOpen={props.isOpen} handleClose={props.handleClose}>
      <ModalContent
        header="Reset Workflow"
        body="This will reset your progress and restart the workflow. Are you sure you want to continue?"
        footer={footer}
      />
    </ModalWrapper>
  );
}
