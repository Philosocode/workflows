import { useAppSelector } from "app/hooks";
import { StepOne } from "consume/components/step-one.component";
import { StepTwo } from "consume/components/step-two.component";

const steps = [<StepOne />, <StepTwo />];

export function ConsumePage() {
  const step = useAppSelector((state) => state.consume.step);

  return <div>{steps[step]}</div>;
}
