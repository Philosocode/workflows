import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { hideModal } from "modal/redux/modal.slice";

import { ModalWrapper } from "./modal-wrapper.component";
import { DeleteHookModal } from "hook/components/delete-hook-modal.component";

const MODAL_COMPONENTS: any = {
  "delete-hook": DeleteHookModal,
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
    return <ModalComponent onClose={handleClose} {...modalProps} />;
  }

  return (
    <ModalWrapper isOpen={modalShowing} onClose={handleClose}>
      {getModalComponent()}
    </ModalWrapper>
  );
}
