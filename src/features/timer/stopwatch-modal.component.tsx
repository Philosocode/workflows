import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { Stopwatch } from "./stopwatch.component";

interface IProps {
  isOpen: boolean;
  toggleModal: () => void;
}
export function StopwatchModal(props: IProps) {
  return (
    <ModalWrapper isOpen={props.isOpen} handleClose={props.toggleModal}>
      <ModalContent header="Stopwatch" body={<Stopwatch />} footer={<div />} />
    </ModalWrapper>
  );
}
