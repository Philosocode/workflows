import { Box, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { showModal } from "shared/components/modal/redux/modal.slice";

import { useTheme } from "shared/hooks/use-theme.hook";
import { useAppDispatch } from "shared/redux/store";
import {
  ITopic,
  TPracticeMode,
} from "features/practice-questions/shared/practice-questions.types";

import { FaClock, FaHashtag, FaPencilAlt, FaTrash } from "react-icons/fa";
import { CardWrapper } from "shared/components/card/card-wrapper.component";
import { IconButton } from "shared/components/button/icon-button.component";

interface IProps {
  topic: ITopic;
  practiceMode: TPracticeMode;

  onTopicClick?: (id: string) => void;
}
export function TopicGridItem({ topic, practiceMode, onTopicClick }: IProps) {
  const dlTheme = useTheme();
  const dispatch = useAppDispatch();

  function showEditModal(event: React.MouseEvent) {
    event.stopPropagation();

    dispatch(
      showModal({
        modalType: "edit-topic",
        modalProps: {
          id: topic.id,
          title: topic.title,
        },
      }),
    );
  }

  function handleDelete() {
    dispatch(
      showModal({
        modalType: "delete-topic",
        modalProps: {
          id: topic.id,
        },
      }),
    );
  }

  const textColor = dlTheme.colors.text;
  const editColor = useColorModeValue("gold.500", "gold.200");
  const deleteColor = useColorModeValue("red.500", "red.200");

  return (
    <CardWrapper
      cursor={onTopicClick && "pointer"}
      p={{ base: 5, md: 7 }}
      position="relative"
      border="1px solid"
      borderColor={dlTheme.components.card.borderColor}
      bg={dlTheme.components.card.bg}
      textColor={textColor}
      onClick={() => onTopicClick?.(topic.id)}
    >
      <Box position="absolute" right={1} top={1}>
        <IconButton
          icon={<FaPencilAlt />}
          aria-label="Edit Topic"
          fontSize="md"
          size="sm"
          textColor="inherit"
          _hover={{
            textColor: editColor,
          }}
          onClick={showEditModal}
        />
        <IconButton
          icon={<FaTrash />}
          aria-label="Delete Topic"
          fontSize="md"
          size="sm"
          textColor="inherit"
          _hover={{
            textColor: deleteColor,
          }}
          onClick={handleDelete}
        />
      </Box>
      <Heading
        fontSize={{ base: "md", md: "lg" }}
        size="md"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        maxWidth="95%"
      >
        {topic.title}
      </Heading>
      {practiceMode === "numQuestions" ? (
        <Box
          d="flex"
          alignItems="center"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="semibold"
        >
          <Icon as={FaHashtag} mr={{ base: 1, md: 2 }} /> {topic.totalCount}
        </Box>
      ) : (
        <Box
          d="flex"
          alignItems="center"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="semibold"
        >
          <Icon as={FaClock} mr={{ base: 1, md: 2 }} /> {topic.totalTime} mins
        </Box>
      )}
    </CardWrapper>
  );
}
