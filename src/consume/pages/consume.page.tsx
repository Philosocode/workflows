import { useAppSelector } from "app/hooks";
import { Step1 } from "consume/components/step-1.component";
import { Step2 } from "consume/components/step-2.component";
import { Step3 } from "consume/components/step-3.component";
import { Step4 } from "consume/components/step-4.component";

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

export function ConsumePage() {
  const step = useAppSelector((state) => state.consume.step);

  // return <div>{steps[step - 1]}</div>;
  return <div>{steps[3]}</div>;
}
