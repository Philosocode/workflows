import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { consumeReducer } from "consume/logic/consume.slice";

export const store = configureStore({
  reducer: {
    consume: consumeReducer,
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
