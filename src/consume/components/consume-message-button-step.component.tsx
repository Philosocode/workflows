import { useAppSelector } from "shared/redux/store";
import { selectStep } from "consume/redux/consume.selectors";

import {
  IMessageButtonStepProps,
  MessageButtonStep,
} from "shared/components/step/message-button-step.component";
import { useNextPage } from "shared/hooks/use-next-page.hook";

export function ConsumeMessageButtonStep(props: IMessageButtonStepProps) {
  const step = useAppSelector(selectStep);
  const nextPage = useNextPage("/consume", step);

  return (
    <MessageButtonStep onNext={nextPage} {...props}>
      {props.children}
    </MessageButtonStep>
  );
}
