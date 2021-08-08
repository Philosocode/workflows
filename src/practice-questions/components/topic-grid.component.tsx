import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectPracticeTopics } from "practice-questions/redux/practice-questions.selectors";
import { TopicGridItem } from "./topic-grid-item.component";

export function TopicGrid(props: SimpleGridProps) {
  const topics = useAppSelector(selectPracticeTopics);

  return (
    <SimpleGrid columns={2} spacing={5} {...props}>
      {Object.values(topics).map((topic) => (
        <TopicGridItem key={topic.id} topic={topic} />
      ))}
    </SimpleGrid>
  );
}
