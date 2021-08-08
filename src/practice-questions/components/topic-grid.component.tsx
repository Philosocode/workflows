import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectPracticeTopics } from "practice-questions/redux/practice-questions.selectors";
import { TopicGridItem } from "./topic-grid-item.component";

interface IProps extends SimpleGridProps {
  currentId?: string;
}
export function TopicGrid(props: IProps) {
  const topics = useAppSelector(selectPracticeTopics);

  return (
    <SimpleGrid columns={2} spacing={5} {...props}>
      {Object.values(topics).map((topic) => {
        if (topic.id === props.currentId) return null;

        return (
          <TopicGridItem
            key={topic.id}
            topic={topic}
            isCurrent={topic.id === props.currentId}
          />
        );
      })}
    </SimpleGrid>
  );
}
