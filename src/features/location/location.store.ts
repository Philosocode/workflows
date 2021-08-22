import create from "zustand";

import { ILocationStore } from "./location.types";

export const useLocationStore = create<ILocationStore>((set) => ({
  currentStep: 0,
  redirectUrl: "/",

  setCurrentStep: (step) => set((state) => ({ ...state, currentStep: step })),
  setRedirectUrl: (url) => set((state) => ({ ...state, redirectUrl: url })),
}));
