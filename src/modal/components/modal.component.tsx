import {
  Modal as ModalBase,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

export interface IProps {
  isOpen: boolean;
  onClose: () => void;
  header: React.ReactNode;
  body: React.ReactNode;

  footer?: React.ReactNode;
}
// FROM: https://tailwindui.com/components/application-ui/overlays/modals
export function Modal(props: IProps) {
  return (
    <ModalBase
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOverlayClick={props.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{props.body}</ModalBody>
        {props.footer && <ModalFooter>{props.footer}</ModalFooter>}
      </ModalContent>
    </ModalBase>
  );
}
