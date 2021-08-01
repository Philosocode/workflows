import {
  ModalBody,
  ModalCloseButton,
  ModalContent as ModalContentChakra,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

export interface IProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}
export function ModalContent(props: IProps) {
  return (
    <>
      <ModalOverlay />
      <ModalContentChakra>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{props.body}</ModalBody>
        {props.footer && <ModalFooter>{props.footer}</ModalFooter>}
      </ModalContentChakra>
    </>
  );
}
