import { useState } from "react";
import { FormControl, VStack } from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button.component";
import { HookSelectModal } from "./hook-select-modal.component";
import { InputWithLabel } from "form/components/input-with-label.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { CreateHookIcons } from "./create-hook-icons.component";

interface IProps {
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
        <VStack spacing={25} alignItems="start">
          <FormControl id="title">
            <InputWithLabel
              id="hookTitle"
              label="Hook Title"
              placeholder="Hook Title"
              value={title}
              onChange={handleTitleChange}
            />
          </FormControl>

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

          <Button disabled={buttonDisabled} type="submit">
            Create
          </Button>
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
