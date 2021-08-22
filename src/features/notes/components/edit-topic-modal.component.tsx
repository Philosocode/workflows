import { useState } from "react";

import { IModalProps } from "shared/components/modal/logic/modal.types";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { InputGroup } from "shared/components/form/input-group.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { usePracticeStore } from "features/practice/logic/practice.store";

interface IProps extends IModalProps {
  id: string;
  title: string;
}
export function EditTopicModal(props: IProps) {
  const { updateTopic } = usePracticeStore();
  const [text, setText] = useState<string>(props.title);

  function handleSave() {
    updateTopic({
      id: props.id,
      updates: {
        title: text.trim(),
      },
    });
    setText("");
    props.handleClose();
  }

  return (
    <ModalContent
      header="Edit Topic Title"
      body={
        <InputGroup
          id="editTopic"
          label="Edit Topic"
          colorScheme="green"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      }
      footer={
        <Buttons>
          <Button
            colorScheme="green"
            disabled={text.trim() === props.title}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button onClick={props.handleClose}>Cancel</Button>
        </Buttons>
      }
    />
  );
}
