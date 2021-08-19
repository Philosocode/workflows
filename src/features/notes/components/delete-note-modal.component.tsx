import { ButtonGroup } from "@chakra-ui/react";

import { IModalProps } from "shared/components/modal/shared/modal.types";
import { useAppDispatch } from "shared/redux/store";
import { deleteNote } from "../logic/note.slice";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";

interface IProps extends IModalProps {
  id: string;
}
export function DeleteNoteModal(props: IProps) {
  const dispatch = useAppDispatch();

  function handleDelete() {
    dispatch(deleteNote(props.id));
    props.onClose();
  }

  return (
    <ModalContent
      header="Delete Note"
      body="Are you sure? You can't undo this action"
      footer={
        <ButtonGroup spacing={3}>
          <Button colorScheme="red" onClick={handleDelete}>
            Delete
          </Button>
          <Button colorScheme="gray" onClick={props.onClose}>
            Cancel
          </Button>
        </ButtonGroup>
      }
    />
  );
}
