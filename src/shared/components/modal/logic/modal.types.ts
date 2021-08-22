export type TModalType = "delete-note" | "delete-topic" | "edit-topic";

export interface IModalState {
  modalOpen: boolean;
  modalType?: TModalType;
  modalProps?: unknown;
}

export interface IModalProps {
  handleClose: () => void;
  isOpen: boolean;
}

export interface IShowModal {
  modalType: TModalType;
  modalProps?: unknown;
}

export interface IModalActions {
  showModal: (args: IShowModal) => void;
  hideModal: () => void;
}

export interface IModalStore extends IModalState, IModalActions {}
