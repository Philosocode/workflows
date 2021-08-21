import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Divider, Heading } from "@chakra-ui/react";
import random from "lodash/random";

import { useRandom } from "shared/hooks/use-random.hook";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectPracticeQuestionsState } from "features/practice-questions/redux/practice-questions.selectors";
import { EXP_RATES } from "features/game/game.constants";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useStep } from "shared/hooks/use-step.hook";
import { theme } from "shared/styles/theme";
import { updateTopic } from "features/practice-questions/redux/practice-questions.slice";
import { addExp } from "features/game/game.slice";
import { scrollToTop } from "shared/helpers/window.helpers";
import { minutesToMs } from "shared/helpers/time.helpers";

import { CountdownTimer } from "features/timer/components/countdown-timer.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { PracticeQuestionsStudyMessage } from "./practice-questions-study-message.component";
import { PracticeCounter } from "./practice-counter.component";
import { TopicGrid } from "./topic-grid.component";
import { WorkflowStep } from "shared/components/step/workflow-step.component";

export function PracticeQuestionsStudy() {
  const dispatch = useAppDispatch();

  const { amount, practiceMode, topics, topicIds } = useAppSelector(
    selectPracticeQuestionsState,
  );
  const [currentId, getRandomTopicId, setTopicId] = useRandom<string>(topicIds);

  const { step: numBlocks, increment: incrementNumBlocks } = useStep();
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState<number>(getRandomGoal());
  const [timerDone, toggleTimerDone] = useToggle();

  const currentTopic = topics[currentId];

  function getRandomGoal() {
    if (amount.min === amount.max) return amount.min;

    return random(amount.min, amount.max);
  }

  function updateCurrentTopicTitle(newTitle: string) {
    dispatch(
      updateTopic({
        id: currentTopic.id,
        updates: {
          title: newTitle,
        },
      }),
    );
  }

  function nextTopic() {
    updateCurrentTopicStats();
    updateExp();

    // switch topics
    getRandomTopicId();
    nextTopicReset();
  }

  function updateCurrentTopicStats() {
    // Update total study time / amount
    const updates = {
      ...(practiceMode === "numQuestions" && {
        totalCount: currentTopic.totalCount + count,
      }),
      ...(practiceMode === "timer" && {
        totalTime: currentTopic.totalTime + goal,
      }),
    };

    // update topic stats
    dispatch(
      updateTopic({
        id: currentTopic.id,
        updates,
      }),
    );
  }

  function updateExp() {
    const expGained =
      practiceMode === "numQuestions"
        ? Math.round(count * EXP_RATES.practiceQuestion)
        : goal * EXP_RATES.practiceTime;

    dispatch(addExp(expGained));
  }

  function nextTopicReset() {
    incrementNumBlocks();
    setCount(0);
    setGoal(getRandomGoal);

    scrollToTop();
  }

  function handleSwitchTopic(nextTopicId: string) {
    setTopicId(nextTopicId);
    nextTopicReset();
  }

  function nextButtonDisabled() {
    if (practiceMode === "numQuestions") {
      return count < goal;
    } else {
      return !timerDone;
    }
  }

  if (topicIds.length === 0) return <Redirect to="/practice-questions/1" />;
  return (
    <>
      <WorkflowStep
        breadcrumbLinks={["Practice Questions", "Study"]}
        message={
          <PracticeQuestionsStudyMessage
            currentTopic={currentTopic}
            practiceMode={practiceMode}
            updateCurrentTopicTitle={updateCurrentTopicTitle}
          />
        }
      >
        {practiceMode === "numQuestions" && (
          <PracticeCounter count={count} setCount={setCount} goal={goal} />
        )}

        {practiceMode === "timer" && (
          <CountdownTimer
            durationInMs={minutesToMs(goal)}
            startAutomatically={false}
            handleNext={toggleTimerDone}
            refreshDep={numBlocks}
          />
        )}

        <CardButtonGrid
          mt={theme.spacing.workflowStepButtonSpacing}
          buttons={[
            {
              text: "Next Topic",
              color: "green",
              disabled: nextButtonDisabled(),
              onClick: nextTopic,
            },
            {
              text: "Settings",
              to: "/practice-questions/1",
            },
          ]}
        />

        {topicIds.length >= 2 && (
          <>
            <Divider mt={8} mb={5} />
            <Heading textAlign="center" fontSize={{ base: "xl", md: "3xl" }}>
              Switch Topics
            </Heading>
            <TopicGrid
              mt={5}
              currentId={currentId}
              handleSwitchTopic={handleSwitchTopic}
            />
          </>
        )}
      </WorkflowStep>
    </>
  );
}
