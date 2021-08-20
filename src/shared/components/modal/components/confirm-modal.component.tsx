import { ReactNode } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";

interface IProps {
  header: ReactNode;
  text: ReactNode;
  onConfirm: () => void;
  modalShowing: boolean;
  toggleModal: () => void;
}
export function ConfirmModal(props: IProps) {
  function handleConfirm() {
    props.onConfirm();
    props.toggleModal();
  }

  return (
    <>
      <ModalWrapper isOpen={props.modalShowing} handleClose={props.toggleModal}>
        <ModalContent
          header={props.header}
          body={props.text}
          footer={
            <ButtonGroup spacing={5}>
              <Button colorScheme="green" onClick={handleConfirm}>
                Yes
              </Button>
              <Button onClick={props.toggleModal}>Cancel</Button>
            </ButtonGroup>
          }
        />
      </ModalWrapper>
    </>
  );
}
