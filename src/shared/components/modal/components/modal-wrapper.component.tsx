import { Modal } from "@chakra-ui/react";

export interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
export function ModalWrapper(props: IProps) {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.handleClose}
      onOverlayClick={props.handleClose}
    >
      {props.children}
    </Modal>
  );
}
