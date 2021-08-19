import { ButtonGroup } from "@chakra-ui/react";
import { InputGroup } from "shared/components/form/input-group.component";

import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { IModalProps } from "shared/components/modal/shared/modal.types";
import { updateTopic } from "features/practice-questions/redux/practice-questions.slice";
import { useState } from "react";
import { Button } from "shared/components/button/button.component";
import { useAppDispatch } from "shared/redux/store";

interface IProps extends IModalProps {
  id: string;
  title: string;
}
export function EditTopicModal(props: IProps) {
  const [text, setText] = useState<string>(props.title);
  const dispatch = useAppDispatch();

  function handleSave() {
    dispatch(
      updateTopic({
        id: props.id,
        updates: {
          title: text.trim(),
        },
      }),
    );
    setText("");
    props.onClose();
  }

  return (
    <ModalContent
      header="Edit Topic Title"
      body={
        <>
          <InputGroup
            id="editTopic"
            label="Edit Topic"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </>
      }
      footer={
        <ButtonGroup spacing={3}>
          <Button
            colorScheme="green"
            disabled={text.trim() === props.title}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button onClick={props.onClose}>Cancel</Button>
        </ButtonGroup>
      }
    />
  );
}
