import { Box, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { showModal } from "modal/redux/modal.slice";
import { deleteTopic } from "practice-questions/redux/practice-questions.slice";

import { ITopic } from "practice-questions/shared/practice-questions.types";
import { FaClock, FaHashtag, FaPencilAlt, FaTrash } from "react-icons/fa";
import { CardWrapper } from "shared/components/card/card-wrapper.component";
import { IconButton } from "shared/components/icon-button.component";
import { useAppDispatch } from "shared/redux/store";

interface IProps {
  topic: ITopic;
}
export function TopicGridItem(props: IProps) {
  const dispatch = useAppDispatch();

  function showEditModal() {
    dispatch(
      showModal({
        modalType: "edit-topic",
        modalProps: {
          id: props.topic.id,
          title: props.topic.title,
        },
      }),
    );
  }

  function handleDelete() {
    dispatch(deleteTopic(props.topic.id));
  }

  const editColor = useColorModeValue("orange.500", "orange.200");
  const deleteColor = useColorModeValue("red.500", "red.200");

  return (
    <CardWrapper p={7} position="relative">
      <Box position="absolute" right={1} top={1}>
        <IconButton
          icon={<FaPencilAlt />}
          aria-label="Edit Topic"
          fontSize="md"
          size="sm"
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
          _hover={{
            textColor: deleteColor,
          }}
          onClick={handleDelete}
        />
      </Box>
      <Heading
        size="md"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        maxWidth="95%"
      >
        {props.topic.title}
      </Heading>
      <Box d="flex" alignItems="center" fontWeight="semibold">
        <Icon as={FaHashtag} mr={2} /> {props.topic.totalCount}
      </Box>
      <Box d="flex" alignItems="center" fontWeight="semibold">
        <Icon as={FaClock} mr={2} /> {props.topic.totalTime}
      </Box>
    </CardWrapper>
  );
}