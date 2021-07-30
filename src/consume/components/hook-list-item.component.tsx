import { Box, Icon, Input } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";

import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { deleteHook, updateHook } from "hook/logic/hook.slice";
import { IHook } from "hook/logic/hook.types";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppDispatch } from "shared/redux/store";
import { DeleteModal } from "modal/components/delete-modal.component";

interface IProps {
  hook: IHook;
}
export function HookListItem(props: IProps) {
  const dispatch = useAppDispatch();
  const [modalShowing, toggleModal] = useToggle(false);

  function handleTitleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value;

    dispatch(updateHook({ ...props.hook, title: newTitle }));
  }

  function handleContentUpdate(content: string) {
    dispatch(updateHook({ ...props.hook, content }));
  }

  function handleDelete() {
    dispatch(deleteHook(props.hook.id));
    toggleModal();
  }

  return (
    <Box
      border="1px solid"
      borderColor="gray.100"
      p={10}
      shadow="md"
      borderRadius="md"
      w="100%"
      position="relative"
    >
      <Icon
        as={FaRegTrashAlt}
        cursor="pointer"
        position="absolute"
        top={5}
        right={5}
        boxSize={5}
        _hover={{ color: "red.500" }}
        onClick={toggleModal}
      />
      <Input
        borderColor="gray.300"
        mb={5}
        variant="flushed"
        value={props.hook.title}
        onChange={handleTitleUpdate}
      />
      <MarkdownEditor
        value={props.hook.content}
        setValue={handleContentUpdate}
      />
      <DeleteModal
        isShowing={modalShowing}
        onClose={toggleModal}
        onDelete={handleDelete}
      />
    </Box>
  );
}
