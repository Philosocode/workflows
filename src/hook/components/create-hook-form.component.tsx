import { useState } from "react";
import { FormControl, VStack } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { createHook } from "hook/redux/hook.slice";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { selectNextStep } from "step/step.slice";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { CreateHookIcons } from "./create-hook-icons.component";
import { HookSelectModal } from "./hook-select-modal.component";
import { InputGroup } from "form/components/input-group.component";
import { Link } from "react-router-dom";
import { MarkdownEditor } from "editor/components/markdown-editor.component";

interface IProps {
  nextUrl?: string;
  nextButtonText?: string;
  showIcons?: boolean;
}
export interface ICreateHookFormProps extends IProps {}
export function CreateHookForm(props: IProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalShowing, toggleModal] = useToggle(false);

  const dispatch = useAppDispatch();
  const nextStep = useAppSelector(selectNextStep);
  const defaultNextUrl = `/consume/${nextStep}`;

  const buttonDisabled = title.trim() === "" || content.trim() === "";

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    dispatch(
      createHook({
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
            id="hookTitle"
            label="Hook Title"
            placeholder="Hook Title"
            value={title}
            mb={props.showIcons ? 0 : 5}
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
        </VStack>
        <CardButtonGrid mt={theme.spacing.workflowStepButtonSpacing}>
          <CardButton color="green" disabled={buttonDisabled} type="submit">
            Create
          </CardButton>
          <Link to={props.nextUrl ?? defaultNextUrl}>
            <CardButton>{props.nextButtonText ?? "Next"}</CardButton>
          </Link>
        </CardButtonGrid>
      </form>

      <HookSelectModal
        isOpen={modalShowing}
        onClose={toggleModal}
        onSelect={(hook) => setTitle(hook)}
      />
    </>
  );
}
