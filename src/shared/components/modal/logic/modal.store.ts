import create from "zustand";

import { IModalState, IModalStore } from "./modal.types";
import { modalActions } from "./modal.actions";

const initialState: IModalState = {
  modalOpen: false,
  modalType: undefined,
  modalProps: undefined,
};

export const useModalStore = create<IModalStore>((set) => ({
  ...initialState,
  ...modalActions(set),
}));
