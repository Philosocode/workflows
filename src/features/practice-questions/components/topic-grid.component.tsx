import { useState } from "react";
import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectPracticeMode } from "features/practice-questions/redux/practice-questions.selectors";
import { selectPracticeTopics } from "features/practice-questions/redux/practice-questions.selectors";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { TopicGridItem } from "./topic-grid-item.component";
import { ConfirmModal } from "shared/components/modal/components/confirm-modal.component";

interface IProps extends SimpleGridProps {
  currentId?: string;
  handleSwitchTopic?: (id: string) => void;
}
export function TopicGrid({ currentId, handleSwitchTopic, ...rest }: IProps) {
  const topics = useAppSelector(selectPracticeTopics);
  const practiceMode = useAppSelector(selectPracticeMode);

  const [switchTopicId, setSwitchTopicId] = useState("");
  const [switchTopicModalOpen, toggleSwitchTopicModal] = useToggle();

  function handleTopicClick(topicId: string) {
    setSwitchTopicId(topicId);
    toggleSwitchTopicModal();
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5} {...rest}>
        {Object.values(topics).map((topic) => {
          /**
           * Don't show the current topic in the grid.
           * This is used in practice study, not practice setup
           */
          if (topic.id === currentId) return null;

          return (
            <TopicGridItem
              key={topic.id}
              topic={topic}
              practiceMode={practiceMode}
              handleTopicClick={handleTopicClick}
            />
          );
        })}
      </SimpleGrid>
      <ConfirmModal
        modalShowing={switchTopicModalOpen}
        toggleModal={toggleSwitchTopicModal}
        header="Switch Topics"
        text={
          <span>
            Are you sure you want to switch to this topic? Your progress {}
            <strong>won't</strong> be saved.
          </span>
        }
        onConfirm={() => handleSwitchTopic?.(switchTopicId)}
      />
    </>
  );
}
