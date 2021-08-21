import { IModalProps } from "shared/components/modal/shared/modal.types";
import { useAppDispatch } from "shared/redux/store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { deleteTopic } from "../redux/practice-questions.slice";

interface IProps extends IModalProps {
  id: string;
}
export function DeleteTopicModal(props: IProps) {
  const dispatch = useAppDispatch();

  function handleDelete() {
    dispatch(deleteTopic(props.id));
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
