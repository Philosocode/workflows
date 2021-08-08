import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectPracticeMode } from "practice-questions/redux/practice-questions.selectors";
import { selectPracticeTopics } from "practice-questions/redux/practice-questions.selectors";

import { TopicGridItem } from "./topic-grid-item.component";

interface IProps extends SimpleGridProps {
  currentId?: string;
  onTopicClick?: (id: string) => void;
}
export function TopicGrid({ currentId, onTopicClick, ...rest }: IProps) {
  const topics = useAppSelector(selectPracticeTopics);
  const practiceMode = useAppSelector(selectPracticeMode);

  return (
    <SimpleGrid columns={2} spacing={5} {...rest}>
      {Object.values(topics).map((topic) => {
        if (topic.id === currentId) return null;

        let component = (
          <TopicGridItem
            key={topic.id}
            topic={topic}
            practiceMode={practiceMode}
            onTopicClick={onTopicClick}
          />
        );

        return component;
      })}
    </SimpleGrid>
  );
}
