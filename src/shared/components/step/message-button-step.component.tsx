import { ReactNode } from "react";

import { Button } from "shared/components/button/button.component";
import { Message } from "message/components/message.component";
import { useKeypress } from "shared/hooks/use-key-press.hook";

interface IProps {
  children: ReactNode;
  onNext: () => void;
}
export function MessageButtonStep(props: IProps) {
  useKeypress("ArrowRight", props.onNext);

  return (
    <>
      <Message>{props.children}</Message>
      <Button onClick={props.onNext}>Next</Button>
    </>
  );
}
