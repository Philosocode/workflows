import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { TAppState, TAppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
