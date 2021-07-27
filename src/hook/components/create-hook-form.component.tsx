import { useState } from "react";
import { FormControl, Input, VStack } from "@chakra-ui/react";

import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { Button } from "shared/components/button.component";

interface IProps {
  onSubmit: (title: string, content: string) => void;
}
export function CreateHookForm(props: IProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    props.onSubmit(title, content);

    setTitle("");
    setContent("");
  }

  const buttonDisabled = title.trim() === "" || content.trim() === "";

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={25} alignItems="start">
        <FormControl id="title">
          <Input
            placeholder="Title"
            required
            variant="flushed"
            focusBorderColor="green.500"
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </FormControl>
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
  );
}
