import { IModalProps } from "shared/components/modal/logic/modal.types";

import { usePracticeStore } from "../logic/practice.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";

interface IProps extends IModalProps {
  id: string;
}
export function DeleteTopicModal(props: IProps) {
  const { deleteTopic } = usePracticeStore();

  function handleDelete() {
    deleteTopic(props.id);
    props.handleClose();
  }

  return (
    <ModalContent
      header="Delete Topic"
      body="Are you sure? You can't undo this action"
      footer={
        <Buttons>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </Buttons>
      }
    />
  );
}
