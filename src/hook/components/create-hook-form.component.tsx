import { useState } from "react";
import { FormControl, HStack, Icon, VStack } from "@chakra-ui/react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";

import { getRandomHook } from "hook/shared/hook.helper";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button.component";
import { HookSelectModal } from "./hook-select-modal.component";
import { InputWithLabel } from "form/components/input-with-label.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";

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
              placeholder="Enter title..."
              value={title}
              onChange={handleTitleChange}
              showLabel
            />
          </FormControl>
          {props.showIcons && (
            <HStack cursor="pointer" spacing={4}>
              <Icon
                as={RiLightbulbFlashFill}
                h={7}
                w={7}
                _hover={{ color: "green.500" }}
                onClick={toggleModal}
              />
              <Icon
                as={FaRandom}
                h={6}
                w={6}
                _hover={{ color: "green.500" }}
                onClick={() => setTitle(getRandomHook(title))}
              />
            </HStack>
          )}
          <FormControl id="content">
            <MarkdownEditor
              value={content}
              setValue={setContent}
              placeholder="Content"
            />
          </FormControl>
          <Button color="green" disabled={buttonDisabled} type="submit">
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
