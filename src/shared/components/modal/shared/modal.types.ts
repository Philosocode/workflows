export type TModalType = "delete-note" | "delete-topic" | "edit-topic";

export interface IModalState {
  modalShowing: boolean;
  modalType?: TModalType;
  modalProps?: unknown;
}

export interface IModalProps {
  handleClose: () => void;
  isOpen: boolean;
}

export interface IShowModalPayload {
  modalType: TModalType;
  modalProps?: unknown;
}
