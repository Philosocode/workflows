import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button.component";
import { Heading } from "typography/components/heading.component";
import { Modal } from "modal/components/modal.component";
import { ModalIcon } from "modal/components/modal-icon.component";
import { ExclamationIcon } from "@heroicons/react/outline";

export function ConsumePage() {
  const [modalShowing, toggleModal] = useToggle(true);

  return (
    <div className="w-5/6 m-auto">
      <Heading tag="h1" type="title">
        Consume Workflow
      </Heading>
      <Button color="green" onClick={toggleModal}>
        Toggle Modal
      </Button>
    </div>
  );
}
