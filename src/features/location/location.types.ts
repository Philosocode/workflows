export interface ILocationState {
  currentStep: number;
  redirectUrl: string;
}

export interface ILocationActions {
  setCurrentStep: (step: number) => void;
  setRedirectUrl: (url: string) => void;
}

export interface ILocationStore extends ILocationState, ILocationActions {}
