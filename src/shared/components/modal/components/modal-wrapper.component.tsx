import { Modal } from "@chakra-ui/react";

export interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export function ModalWrapper(props: IProps) {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOverlayClick={props.onClose}
    >
      {props.children}
    </Modal>
  );
}
