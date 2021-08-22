import { FormEvent, useState } from "react";
import { Box, Flex, FormLabel, IconButton } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

import { usePracticeStore } from "../logic/practice.store";

import { InputGroup } from "shared/components/form/input-group.component";
import { TopicGrid } from "./topic-grid.component";

export function PracticeTopics() {
  const { createTopic } = usePracticeStore();
  const [title, setTitle] = useState("");

  function addTopic(event: FormEvent) {
    event.preventDefault();
    if (!title) return;

    createTopic({
      id: `${Date.now()}`,
      title: title.trim(),
      totalCount: 0,
      totalTime: 0,
    });
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
