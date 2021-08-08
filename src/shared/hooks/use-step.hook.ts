import { useState } from "react";

interface IProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}
export function useStep(props: IProps = {}) {
  const [step, setStep] = useState(props.initialValue ?? props.min ?? 0);

  function increment() {
    if (props.max && step === props.max) return;

    setStep((prevValue) => {
      let newValue = prevValue + (props.step ?? 1);
      if (props.max && newValue > props.max) {
        newValue = props.max;
      }

      return newValue;
    });
  }

  function decrement() {
    if (props.min && step === props.min) return;

    setStep((prevValue) => {
      let newValue = prevValue - (props.step ?? 1);
      if (props.min && newValue < props.min) {
        newValue = props.min;
      }

      return newValue;
    });
  }

  return { step, setStep, increment, decrement };
}
