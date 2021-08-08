import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Divider, Heading } from "@chakra-ui/react";
import random from "lodash/random";

import { useRandom } from "shared/hooks/use-random.hook";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectPracticeQuestionsState } from "practice-questions/redux/practice-questions.selectors";
import { useTheme } from "shared/hooks/use-theme.hook";
import { theme } from "shared/styles/theme";
import { updateTopic } from "practice-questions/redux/practice-questions.slice";

import { TopicGrid } from "./topic-grid.component";
import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { PracticeCounter } from "./practice-counter.component";
import { InputGroup } from "form/components/input-group.component";

export function PracticeQuestionsStudy() {
  const dispatch = useAppDispatch();
  const { amount, practiceMode, topics, topicIds } = useAppSelector(
    selectPracticeQuestionsState,
  );
  const [currentId, getRandomTopicId] = useRandom(topicIds);
  const dlTheme = useTheme();

  function getRandomGoal() {
    return random(amount.min, amount.max);
  }

  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(getRandomGoal());

  useEffect(() => {
    if (amount.min === amount.max) return;

    setGoal((prevValue) => {
      let newValue = getRandomGoal();
      while (newValue === prevValue) {
        newValue = getRandomGoal();
      }

      return newValue;
    });
    // eslint-disable-next-line
  }, [currentId]);

  const currentTopic = topics[currentId];

  function updateTopicTitle(newTitle: string) {
    if (newTitle === currentTopic.title) return;

    dispatch(
      updateTopic({
        id: currentTopic.id,
        updates: {
          title: newTitle,
        },
      }),
    );
  }

  if (topicIds.length === 0) return <Redirect to="/practice-questions/1" />;
  return (
    <WorkflowStep
      breadcrumbLinks={["Practice Questions", "Study"]}
      message={
        <>
          <Box>Your current topic is:</Box>
          <InputGroup
            id="currentTopic"
            fontSize="inherit"
            label="Current Topic"
            colorScheme="green"
            textColor={dlTheme.colors.green}
            variant="flushed"
            value={currentTopic.title}
            onChange={(event) => updateTopicTitle(event.target.value)}
            autoCorrect="false"
          />
          {practiceMode === "numQuestions" ? (
            <Box my={theme.spacing.messageBoxSpacing}>
              You've answered {currentTopic.totalCount} questions so far.
            </Box>
          ) : (
            <Box my={theme.spacing.messageBoxSpacing}>
              You've studied this topic for {currentTopic.totalTime} minutes so
              far.
            </Box>
          )}
          <Box fontSize={theme.typography.fontSize.messageAside}>
            Note: you can change the topic title by typing.
          </Box>
        </>
      }
    >
      <PracticeCounter count={count} goal={goal} setCount={setCount} />
      <Divider mt={8} mb={5} />
      <Heading textAlign="center" size="lg">
        Other Topics
      </Heading>
      <TopicGrid mt={5} currentId={currentId} />
    </WorkflowStep>
  );
}
