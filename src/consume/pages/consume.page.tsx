import { useAppSelector } from "app/hooks";
import { StepOne } from "consume/components/step-one.component";
import { StepTwo } from "consume/components/step-two.component";
import { StepThree } from "consume/components/step-three.component";

const steps = [<StepOne />, <StepTwo />, <StepThree />];

export function ConsumePage() {
  const step = useAppSelector((state) => state.consume.step);

  // return <div>{steps[step - 1]}</div>;
  return <div>{steps[3]}</div>;
}
