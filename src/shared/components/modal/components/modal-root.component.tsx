import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { hideModal } from "shared/components/modal/redux/modal.slice";

import { ModalWrapper } from "./modal-wrapper.component";
import { DeleteNoteModal } from "features/notes/components/delete-note-modal.component";
import { EditTopicModal } from "features/notes/components/edit-topic-modal.component";

const MODAL_COMPONENTS: any = {
  "delete-note": DeleteNoteModal,
  "edit-topic": EditTopicModal,
};

export function ModalRoot() {
  const modalState = useAppSelector((state) => state.modal);
  const { modalType, modalShowing, modalProps } = modalState;
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(hideModal());
  }

  function getModalComponent() {
    if (!modalType) return null;

    const ModalComponent = MODAL_COMPONENTS[modalType];
    return <ModalComponent handleClose={handleClose} {...modalProps} />;
  }

  return (
    <ModalWrapper isOpen={modalShowing} handleClose={handleClose}>
      {getModalComponent()}
    </ModalWrapper>
  );
}
