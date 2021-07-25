import { useState } from "react";

export function useStep(min: number, max: number, initialValue?: number) {
  const [step, setStep] = useState(initialValue ?? min);

  function increment(amount: number = 1) {
    if (step === max) return;

    setStep((prevState) => prevState + amount);
  }

  function decrement(amount: number = 1) {
    if (step === min) return;

    setStep((prevState) => prevState - amount);
  }

  return { step, setStep, increment, decrement };
}
