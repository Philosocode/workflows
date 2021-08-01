import { ButtonGroup } from "@chakra-ui/react";
import { deleteHook } from "hook/redux/hook.slice";

import { ModalContent } from "modal/components/modal-content.component";
import { IModalProps } from "modal/shared/modal.types";
import { Button } from "shared/components/button/button.component";
import { useAppDispatch } from "shared/redux/store";

interface IProps extends IModalProps {
  id: string;
}
export function DeleteHookModal(props: IProps) {
  const dispatch = useAppDispatch();

  function onDelete() {
    dispatch(deleteHook(props.id));
    props.onClose();
  }

  return (
    <ModalContent
      header="Delete Hook"
      body="Are you sure? You can't undo this action"
      footer={
        <ButtonGroup spacing={3}>
          <Button color="red" onClick={onDelete}>
            Delete
          </Button>
          <Button color="gray" onClick={props.onClose}>
            Cancel
          </Button>
        </ButtonGroup>
      }
    />
  );
}
