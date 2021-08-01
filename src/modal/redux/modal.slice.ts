import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IModalState, IShowModalPayload } from "../shared/modal.types";

const initialState: IModalState = {
  modalShowing: false,
  modalType: undefined,
  modalProps: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IShowModalPayload>) => {
      const { modalType, modalProps } = action.payload;

      state.modalShowing = true;
      state.modalType = modalType;

      if (modalProps) {
        state.modalProps = modalProps;
      }
    },
    hideModal: (state) => {
      state.modalShowing = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { showModal, hideModal } = modalSlice.actions;
