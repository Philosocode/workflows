import { Button } from "shared/components/button.component";
import { Heading } from "typography/components/heading.component";

export function ConsumePage() {
  return (
    <div className="w-5/6 m-auto">
      <Heading tag="h1" type="title">
        Consume Workflow
      </Heading>
      <Button color="green">Click Me</Button>
    </div>
  );
}
