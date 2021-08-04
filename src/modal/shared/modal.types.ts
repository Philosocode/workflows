export type TModalType = "delete-hook";

export interface IModalState {
  modalShowing: boolean;
  modalType?: TModalType;
  modalProps?: unknown;
}

export interface IModalProps {
  onClose: () => void;
}

export interface IShowModalPayload {
  modalType: TModalType;
  modalProps?: unknown;
}
