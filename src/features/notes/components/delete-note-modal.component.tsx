import { IModalProps } from "shared/components/modal/logic/modal.types";
import { useNoteStore } from "../logic/note.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";

interface IProps extends IModalProps {
  id: string;
}
export function DeleteNoteModal(props: IProps) {
  const { deleteNote } = useNoteStore();

  function handleDelete() {
    deleteNote(props.id);
    props.handleClose();
  }

  return (
    <ModalContent
      header="Delete Note"
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
