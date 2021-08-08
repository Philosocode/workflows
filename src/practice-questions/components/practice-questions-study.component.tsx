import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Divider, Heading } from "@chakra-ui/react";
import random from "lodash/random";

import { useRandom } from "shared/hooks/use-random.hook";
import { useAppSelector } from "shared/redux/store";
import {
  selectAmount,
  selectPracticeTopics,
} from "practice-questions/redux/practice-questions.selectors";

import { TopicGrid } from "./topic-grid.component";
import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { PracticeCounter } from "./practice-counter.component";
import { useEffect } from "react";

export function PracticeQuestionsStudy() {
  const amount = useAppSelector(selectAmount);
  const topics = Object.values(useAppSelector(selectPracticeTopics));
  const [currentTopic, getRandomTopic] = useRandom(topics);

  function getRandomGoal() {
    return random(amount.min, amount.max);
  }

  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(getRandomGoal());

  useEffect(() => {
    setGoal((prevValue) => {
      let newValue = getRandomGoal();
      while (newValue === prevValue) {
        newValue = getRandomGoal();
      }

      return newValue;
    });
    // eslint-disable-next-line
  }, [currentTopic]);

  if (topics.length === 0) return <Redirect to="/practice-questions/1" />;
  return (
    <WorkflowStep
      breadcrumbLinks={["Practice Questions", "Study"]}
      message={`Your current topic is "${currentTopic.title}".`}
    >
      <PracticeCounter count={count} goal={goal} setCount={setCount} />
      <Divider mt={8} mb={5} />
      <Heading textAlign="center" size="lg">
        All Topics
      </Heading>
      <TopicGrid mt={5} />
    </WorkflowStep>
  );
}
