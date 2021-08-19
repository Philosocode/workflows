import { useState } from "react";
import { FormControl, VStack } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectNextStep } from "features/step/step.slice";
import { theme } from "shared/styles/theme";
import { createNote } from "../logic/note.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { InputGroup } from "shared/components/form/input-group.component";
import { Link } from "react-router-dom";
import { MarkdownEditor } from "shared/components/editor/markdown-editor.component";

interface IProps {
  nextUrl?: string;
  nextButtonText?: string;
}
export interface ICreateNoteFormProps extends IProps {}
export function CreateNoteForm(props: IProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();
  const nextStep = useAppSelector(selectNextStep);
  const defaultNextUrl = `/consume/${nextStep}`;

  const buttonDisabled = title.trim() === "" || content.trim() === "";

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    dispatch(
      createNote({
        id: `${Date.now()}`,
        title,
        content,
        isExpanded: true,
      }),
    );

    setTitle("");
    setContent("");
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <VStack alignItems="start">
          <InputGroup
            id="noteTitle"
            label="Note Title"
            placeholder="Note Title"
            value={title}
            mb={5}
            onChange={handleTitleChange}
          />

          <FormControl id="content">
            <MarkdownEditor
              value={content}
              setValue={setContent}
              placeholder="Content"
            />
          </FormControl>
        </VStack>
        <CardButtonGrid mt={theme.spacing.workflowStepButtonSpacing}>
          <CardButton color="green" disabled={buttonDisabled} type="submit">
            Create Note
          </CardButton>
          <Link to={props.nextUrl ?? defaultNextUrl}>
            <CardButton>{props.nextButtonText ?? "Next"}</CardButton>
          </Link>
        </CardButtonGrid>
      </form>
    </>
  );
}
