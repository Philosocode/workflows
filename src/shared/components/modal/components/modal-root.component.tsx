import { FC } from "react";

import { TModalType } from "../logic/modal.types";

import { DeleteNoteModal } from "features/notes/components/delete-note-modal.component";
import { DeleteTopicModal } from "features/practice/components/delete-topic-modal.component";
import { EditTopicModal } from "features/notes/components/edit-topic-modal.component";
import { ModalWrapper } from "./modal-wrapper.component";
import { useModalStore } from "../logic/modal.store";

const MODAL_COMPONENTS: Record<TModalType, FC<any>> = {
  "delete-note": DeleteNoteModal,
  "delete-topic": DeleteTopicModal,
  "edit-topic": EditTopicModal,
};

export function ModalRoot() {
  const { hideModal, modalType, modalProps, modalOpen } = useModalStore();

  function getModalComponent() {
    if (!modalType) return null;

    const ModalComponent = MODAL_COMPONENTS[modalType];
    return <ModalComponent handleClose={hideModal} {...modalProps} />;
  }

  return (
    <ModalWrapper isOpen={modalOpen} handleClose={hideModal}>
      {getModalComponent()}
    </ModalWrapper>
  );
}
