import { nextStep } from "consume/redux/consume.slice";
import { MessageButtonStep } from "shared/components/step/message-button-step.component";
import { useAppDispatch } from "shared/redux/store";

interface IProps {
  children: React.ReactNode;
}
export function ConsumeMessageButtonStep(props: IProps) {
  const dispatch = useAppDispatch();

  return (
    <MessageButtonStep onNext={() => dispatch(nextStep())}>
      {props.children}
    </MessageButtonStep>
  );
}
