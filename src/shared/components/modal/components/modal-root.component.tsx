import { FC, ReactNode } from "react";

import { TModalType } from "../shared/modal.types";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { hideModal } from "shared/components/modal/redux/modal.slice";

import { DeleteNoteModal } from "features/notes/components/delete-note-modal.component";
import { DeleteTopicModal } from "features/practice-questions/components/delete-topic-modal.component";
import { EditTopicModal } from "features/notes/components/edit-topic-modal.component";
import { ModalWrapper } from "./modal-wrapper.component";

const MODAL_COMPONENTS: Record<TModalType, FC<any>> = {
  "delete-note": DeleteNoteModal,
  "delete-topic": DeleteTopicModal,
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
