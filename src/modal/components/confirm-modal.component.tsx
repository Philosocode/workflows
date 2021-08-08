import { ReactNode } from "react";
import { ButtonGroup } from "@chakra-ui/react";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "modal/components/modal-content.component";
import { ModalWrapper } from "modal/components/modal-wrapper.component";

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
      <ModalWrapper isOpen={props.modalShowing} onClose={props.toggleModal}>
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
