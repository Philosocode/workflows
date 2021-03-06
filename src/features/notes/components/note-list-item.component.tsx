import {
  Box,
  Icon,
  SlideFade,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronDown, FaRegTrashAlt } from "react-icons/fa";

// logic
import { INote } from "../logic/note.types";
import { useNoteStore } from "../logic/note.store";
import { useModalStore } from "shared/components/modal/logic/modal.store";

import { InputGroup } from "shared/components/form/input-group.component";
import { MarkdownEditor } from "shared/components/editor/markdown-editor.component";

interface IProps {
  note: INote;
}
export function NoteListItem({ note }: IProps) {
  const { updateNote } = useNoteStore();
  const { showModal } = useModalStore();

  function handleTitleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    handleNoteUpdate({ title: event.target.value });
  }

  function handleContentUpdate(content: string) {
    handleNoteUpdate({ content });
  }

  function handleToggle() {
    handleNoteUpdate({ isExpanded: !note.isExpanded });
  }

  function handleNoteUpdate(updates: Partial<INote>) {
    updateNote({ id: note.id, updates: { ...updates } });
  }

  function handleDelete() {
    showModal({
      modalType: "delete-note",
      modalProps: {
        id: note.id,
      },
    });
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
        cursor={note.isExpanded ? "default" : "pointer"}
        position="relative"
        shadow="md"
        w="100%"
      >
        {!note.isExpanded && (
          <Box
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            onClick={handleToggle}
            py={{ base: 3, md: 5 }}
            px={{ base: 4, md: 10 }}
          >
            <Text>{note.title}</Text>
            <Icon as={FaChevronDown} />
          </Box>
        )}
        {note.isExpanded && (
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
              id={note.id}
              label="Note Title"
              mb={5}
              value={note.title}
              onChange={handleTitleUpdate}
            />

            <MarkdownEditor
              value={note.content}
              setValue={handleContentUpdate}
            />
          </Box>
        )}
      </Box>
    </SlideFade>
  );
}
