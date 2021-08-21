import { FormEvent, useState } from "react";
import { Box, Flex, FormLabel, IconButton, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

import { useAppDispatch } from "shared/redux/store";
import { createTopic } from "features/practice-questions/redux/practice-questions.slice";
import { theme } from "shared/styles/theme";

import { InputGroup } from "shared/components/form/input-group.component";
import { TopicGrid } from "./topic-grid.component";

export function PracticeTopics() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");

  function addTopic(event: FormEvent) {
    event.preventDefault();
    if (!title) return;

    dispatch(
      createTopic({
        id: `${Date.now()}`,
        title: title.trim(),
        totalCount: 0,
        totalTime: 0,
      }),
    );
    setTitle("");
  }

  return (
    <Box w="full">
      <form onSubmit={addTopic}>
        <FormLabel>Create Topics</FormLabel>
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
