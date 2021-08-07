import {
  Box,
  Icon,
  SlideFade,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronDown, FaRegTrashAlt } from "react-icons/fa";

// logic
import { IHook } from "hook/shared/hook.types";
import { updateHook } from "hook/redux/hook.slice";
import { useAppDispatch } from "shared/redux/store";

import { InputGroup } from "form/components/input-group.component";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { showModal } from "modal/redux/modal.slice";

interface IProps {
  hook: IHook;
}
export function HookListItem({ hook }: IProps) {
  const dispatch = useAppDispatch();

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
    dispatch(
      showModal({
        modalType: "delete-hook",
        modalProps: {
          id: hook.id,
        },
      }),
    );
  }

  const styles = {
    bg: useColorModeValue("gray.100", "gray.700"),
    borderColor: useColorModeValue("gray.100", "gray.600"),
    red: useColorModeValue("red.500", "red.200"),
  };

  return (
    <SlideFade in offsetY={-50}>
      <Box
        bg={styles.bg}
        border="1px solid"
        borderColor={styles.borderColor}
        borderRadius="md"
        cursor={hook.isExpanded ? "default" : "pointer"}
        position="relative"
        shadow="md"
        w="100%"
      >
        {!hook.isExpanded && (
          <Box
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            onClick={handleToggle}
            py={{ base: 3, md: 5 }}
            px={{ base: 5, md: 10 }}
          >
            <Text>{hook.title}</Text>
            <Icon as={FaChevronDown} />
          </Box>
        )}
        {hook.isExpanded && (
          <Box pb={{ base: 5, md: 10 }} px={{ base: 5, md: 10 }}>
            <Box
              className="header"
              cursor="pointer"
              onClick={handleToggle}
              py={{ base: 5, md: 5 }}
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
                _hover={{ color: styles.red }}
                onClick={(event) => {
                  event.stopPropagation();
                  handleDelete();
                }}
              />
            </Box>

            <InputGroup
              id={hook.id}
              label="Hook Title"
              mb={5}
              value={hook.title}
              onChange={handleTitleUpdate}
            />

            <MarkdownEditor
              value={hook.content}
              setValue={handleContentUpdate}
            />
          </Box>
        )}
      </Box>
    </SlideFade>
  );
}
