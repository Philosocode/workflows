import { FormEvent, useState } from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";

import { useAppDispatch } from "shared/redux/store";
import { createTopic } from "practice-questions/redux/practice-questions.slice";

import { InputGroup } from "form/components/input-group.component";
import { ITopic } from "practice-questions/shared/practice-questions.types";
import { TopicGrid } from "./topic-grid.component";
import { FaPlus } from "react-icons/fa";

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
      <Heading mb={1} size="md">
        Topics
      </Heading>
      <form onSubmit={addTopic}>
        <Box d="flex" maxW="96">
          <InputGroup
            id="topicCreate"
            label="Topics"
            placeholder="Topic Name"
            colorScheme="green"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <IconButton
            colorScheme="green"
            disabled={title.trim() === ""}
            ml={3}
            type="submit"
            icon={<FaPlus />}
            aria-label="Add Topic"
            variant="solid"
          />
        </Box>
      </form>
      <TopicGrid mt={5} />
    </Box>
  );
}