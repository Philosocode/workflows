import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { consumeReducer } from "consume/redux/consume.slice";
import { hookReducer } from "hook/redux/hook.slice";
import { modalReducer } from "modal/redux/modal.slice";
import { stepReducer } from "../../step/step.slice";

export const store = configureStore({
  reducer: {
    consume: consumeReducer,
    hook: hookReducer,
    modal: modalReducer,
    step: stepReducer,
  },
});

export type TAppDispatch = typeof store.dispatch;
export type TAppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TAppState,
  unknown,
  Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
