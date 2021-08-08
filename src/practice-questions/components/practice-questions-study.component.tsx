import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Divider, Heading, useToast } from "@chakra-ui/react";
import random from "lodash/random";

import { useRandom } from "shared/hooks/use-random.hook";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import {
  selectPracticeQuestionsState,
  selectTotalPracticeCount,
  selectTotalPracticeTime,
} from "practice-questions/redux/practice-questions.selectors";
import { useTheme } from "shared/hooks/use-theme.hook";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { theme } from "shared/styles/theme";
import { updateTopic } from "practice-questions/redux/practice-questions.slice";

import { TopicGrid } from "./topic-grid.component";
import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { PracticeCounter } from "./practice-counter.component";
import { InputGroup } from "form/components/input-group.component";
import { Timer } from "timer/components/timer.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { useStep } from "shared/hooks/use-step.hook";
import { ConfirmModal } from "modal/components/confirm-modal.component";
import { truncate } from "shared/helpers/string.helper";

export function PracticeQuestionsStudy() {
  const dispatch = useAppDispatch();
  const { amount, practiceMode, topics, topicIds } = useAppSelector(
    selectPracticeQuestionsState,
  );
  const totalTime = useAppSelector(selectTotalPracticeTime);
  const totalCount = useAppSelector(selectTotalPracticeCount);
  const [currentId, getRandomTopicId, setTopicId] = useRandom(topicIds);
  const dlTheme = useTheme();
  const toast = useToast();

  const { step: numBlocks, increment: incrementNumBlocks } = useStep();
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState<number>(getRandomGoal());
  const [timerDone, toggleTimerDone] = useToggle();
  const [modalShowing, toggleModal] = useToggle();
  const [switchTopicId, setSwitchTopicId] = useState("");

  const currentTopic = topics[currentId];

  function getRandomGoal() {
    if (amount.min === amount.max) return amount.min;

    return random(amount.min, amount.max);
  }

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

  function nextTopic() {
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

    let message: string;
    if (topicIds.length >= 2) {
      const randomId = getRandomTopicId();

      message =
        practiceMode === "numQuestions"
          ? `+${count}. Next Topic: ${topics[randomId].title}`
          : `+${goal} mins. Next Topic: ${topics[randomId].title}`;
    } else {
      message = practiceMode === "numQuestions" ? `+${count}` : `+${goal}`;
    }

    showToast(message);

    nextTopicReset();
  }

  function nextTopicReset() {
    setGoal(getRandomGoal);
    setCount(0);
    incrementNumBlocks();
    toggleTimerDone();

    scrollToTop();
  }

  function scrollToTop() {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }

  function showModal(newTopicId: string) {
    setSwitchTopicId(newTopicId);
    toggleModal();
  }

  function handleSwitch() {
    showToast("Switched topics");
    setTopicId(switchTopicId);

    nextTopicReset();
  }

  function showToast(message: string) {
    toast({
      title: truncate(message, 55),
      position: "top",
      isClosable: true,
      duration: 3000,
      status: "success",
    });
  }

  const nextButtonDisabled =
    practiceMode === "numQuestions" ? !goal || count < goal : !timerDone;

  if (topicIds.length === 0) return <Redirect to="/practice-questions/1" />;
  return (
    <>
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
                You've answered {currentTopic.totalCount} questions so far.{" "}
                <br />
                In total, you've completed {totalCount} questions.
              </Box>
            ) : (
              <Box my={theme.spacing.messageBoxSpacing}>
                You've studied this topic for {currentTopic.totalTime} minutes
                so far. <br />
                In total, you've studied for {totalTime} minutes.
              </Box>
            )}
            <Box fontSize={theme.typography.fontSize.messageAside}>
              Note: you can change the topic title by typing.
            </Box>
          </>
        }
      >
        {practiceMode === "numQuestions" && goal && (
          <PracticeCounter count={count} setCount={setCount} goal={goal} />
        )}

        {practiceMode === "timer" && goal && (
          <Timer
            duration={goal}
            shouldPlayAlarm={false}
            startAutomatically={false}
            onNext={toggleTimerDone}
            refreshDep={numBlocks}
          />
        )}

        <CardButtonGrid
          mt={theme.spacing.workflowStepButtonSpacing}
          buttons={[
            {
              text: "Next Topic",
              color: "green",
              disabled: nextButtonDisabled,
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
            <Heading textAlign="center" size="lg">
              Switch Topics
            </Heading>
            <TopicGrid mt={5} currentId={currentId} onTopicClick={showModal} />
          </>
        )}
      </WorkflowStep>
      <ConfirmModal
        modalShowing={modalShowing}
        toggleModal={toggleModal}
        header="Switch Topics"
        text={
          <span>
            Are you sure you want to switch to this topic? Your progress {}
            <strong>won't</strong> be saved.
          </span>
        }
        onConfirm={handleSwitch}
      />
    </>
  );
}
