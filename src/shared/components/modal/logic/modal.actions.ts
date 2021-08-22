import { SetState } from "zustand";
import { IModalActions, IModalStore, IShowModal } from "./modal.types";

export function modalActions(set: SetState<IModalStore>): IModalActions {
  return {
    showModal: (args: IShowModal) => {
      set((state) => ({
        ...state,
        modalOpen: true,
        modalType: args.modalType,
        modalProps: args.modalProps ?? undefined,
      }));
    },
    hideModal: () => {
      set((state) => ({ ...state, modalOpen: false }));
    },
  };
}
