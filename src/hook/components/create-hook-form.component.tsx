import { useState } from "react";
import { ButtonGroup, FormControl, VStack } from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button/button.component";
import { HookSelectModal } from "./hook-select-modal.component";
import { InputGroup } from "form/components/input-group.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { CreateHookIcons } from "./create-hook-icons.component";
import { Link } from "react-router-dom";

interface IProps {
  backUrl: string;
  onSubmit: (title: string, content: string) => void;

  showIcons?: boolean;
}
export function CreateHookForm(props: IProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalShowing, toggleModal] = useToggle(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    props.onSubmit(title, content);

    setTitle("");
    setContent("");
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const buttonDisabled = title.trim() === "" || content.trim() === "";

  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack spacing={4} alignItems="start">
          <InputGroup
            id="hookTitle"
            label="Hook Title"
            placeholder="Hook Title"
            value={title}
            onChange={handleTitleChange}
          />

          {props.showIcons && (
            <CreateHookIcons
              toggleModal={toggleModal}
              setTitle={setTitle}
              currentTitle={title}
            />
          )}

          <FormControl id="content">
            <MarkdownEditor
              value={content}
              setValue={setContent}
              placeholder="Content"
            />
          </FormControl>

          <ButtonGroup spacing={5}>
            <Button disabled={buttonDisabled} type="submit">
              Create
            </Button>
            <Link to={props.backUrl}>
              <Button colorScheme="gray" type="button">
                Go Back
              </Button>
            </Link>
          </ButtonGroup>
        </VStack>
      </form>

      <HookSelectModal
        isOpen={modalShowing}
        onClose={toggleModal}
        onSelect={(hook) => setTitle(hook)}
      />
    </>
  );
}
