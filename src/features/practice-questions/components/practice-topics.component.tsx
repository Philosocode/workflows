import { FormEvent, useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

import { useAppDispatch } from "shared/redux/store";
import { createTopic } from "features/practice-questions/redux/practice-questions.slice";

import { InputGroup } from "shared/components/form/input-group.component";
import { ITopic } from "features/practice-questions/shared/practice-questions.types";
import { TopicGrid } from "./topic-grid.component";
import { theme } from "shared/styles/theme";

export function PracticeTopics() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");

  function addTopic(event: FormEvent) {
    event.preventDefault();
    if (!title) return;

    const newTopic: ITopic = {
      id: `${Date.now()}`,
      title: title.trim(),
      totalCount: 0,
      totalTime: 0,
    };

    dispatch(createTopic(newTopic));
    setTitle("");
  }

  return (
    <Box w="full">
      <Text
        fontSize={{ base: "sm", md: "md" }}
        mb={1}
        sx={theme.typography.condensed}
      >
        Topics
      </Text>
      <form onSubmit={addTopic}>
        <Flex maxW="96" alignItems="flex-end">
          <InputGroup
            id="topicCreate"
            label="Topics"
            placeholder="Topic Name"
            colorScheme="green"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <IconButton
            aria-label="Add Topic"
            colorScheme="green"
            disabled={title.trim() === ""}
            ml={1}
            type="submit"
            icon={<FaPlus />}
            variant="solid"
          />
        </Flex>
      </form>
      <TopicGrid mt={5} />
    </Box>
  );
}
