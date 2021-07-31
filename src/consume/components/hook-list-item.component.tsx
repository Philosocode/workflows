import { Box, Icon, Input, Text } from "@chakra-ui/react";
import { FaChevronDown, FaRegTrashAlt } from "react-icons/fa";

import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { deleteHook, updateHook } from "hook/logic/hook.slice";
import { IHook } from "hook/logic/hook.types";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppDispatch } from "shared/redux/store";
import { DeleteModal } from "modal/components/delete-modal.component";

interface IProps {
  hook: IHook;
}
export function HookListItem({ hook }: IProps) {
  const dispatch = useAppDispatch();
  const [modalShowing, toggleModal] = useToggle(false);

  function handleTitleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    handleHookUpdate({ title: event.target.value });
  }

  function handleContentUpdate(content: string) {
    handleHookUpdate({ content });
  }

  function handleToggle() {
    handleHookUpdate({ isExpanded: !hook.isExpanded });
  }

  function handleHookUpdate(updates: Partial<IHook>) {
    dispatch(updateHook({ id: hook.id, updates: { ...updates } }));
  }

  function handleDelete() {
    dispatch(deleteHook(hook.id));
    toggleModal();
  }

  return (
    <Box
      border="1px solid"
      borderColor="gray.100"
      cursor={hook.isExpanded ? "default" : "pointer"}
      shadow="md"
      borderRadius="md"
      w="100%"
      position="relative"
    >
      {!hook.isExpanded && (
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          onClick={handleToggle}
          py={5}
          px={10}
        >
          <Text>{hook.title}</Text>
          <Icon as={FaChevronDown} />
        </Box>
      )}
      {hook.isExpanded && (
        <Box pb={10} px={10}>
          <Box
            className="header"
            cursor="pointer"
            onClick={handleToggle}
            py={5}
            w="100%"
            h="1rem"
          >
            <Icon
              as={FaRegTrashAlt}
              cursor="pointer"
              position="absolute"
              top={5}
              right={5}
              boxSize={5}
              _hover={{ color: "red.500" }}
              onClick={(event) => {
                event.stopPropagation();
                toggleModal();
              }}
            />
          </Box>

          <Input
            borderColor="gray.300"
            mb={5}
            focusBorderColor="green.500"
            variant="flushed"
            value={hook.title}
            onChange={handleTitleUpdate}
          />
          <MarkdownEditor value={hook.content} setValue={handleContentUpdate} />
        </Box>
      )}
      <DeleteModal
        isShowing={modalShowing}
        onClose={toggleModal}
        onDelete={handleDelete}
      />
    </Box>
  );
}
