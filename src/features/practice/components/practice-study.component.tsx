import { useReducer } from "react";
import produce from "immer";
import { Redirect } from "react-router-dom";
import { Divider, Heading } from "@chakra-ui/react";
import { random } from "lodash";

import { EXP_RATES } from "features/game/logic/game.constants";
import { useGameStore } from "features/game/logic/game.store";
import { usePracticeStore } from "../logic/practice.store";
import { theme } from "shared/styles/theme";
import { scrollToTop } from "shared/helpers/window.helpers";
import { minutesToMs } from "shared/helpers/time.helpers";
import { randomFromArray } from "shared/helpers/random.helpers";

import { CountdownTimer } from "features/timer/components/countdown-timer.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { PracticeQuestionsStudyMessage } from "./practice-study-message.component";
import { PracticeCounter } from "./practice-counter.component";
import { TopicGrid } from "./topic-grid.component";
import { WorkflowStep } from "shared/components/step/workflow-step.component";

// Types
interface IState {
  currentTopicId: string;
  count: number;
  goal: number;
  blocksCompleted: number;
  timerDone: boolean;
}

type TAction =
  | {
      type: "Next Topic";
      payload: {
        minGoal: number;
        maxGoal: number;
        nextTopicId: string;
      };
    }
  | { type: "Set Count"; payload: number }
  | { type: "Toggle Timer" };

// Reducer
function reducer(state: IState, action: TAction): IState {
  return produce(state, (draft) => {
    switch (action.type) {
      case "Next Topic":
        const { maxGoal, minGoal, nextTopicId } = action.payload;

        draft.blocksCompleted++;
        draft.count = 0;
        draft.goal = random(minGoal, maxGoal);
        draft.currentTopicId = nextTopicId;
        break;

      case "Set Count":
        draft.count = action.payload;
        break;

      case "Toggle Timer":
        draft.timerDone = !state.timerDone;
        break;

      default:
        break;
    }
  });
}

// Component
export function PracticeQuestionsStudy() {
  // Data
  const { amount, practiceMode, topicIds, topics, updateTopic } =
    usePracticeStore();

  const initialState = {
    currentTopicId: randomFromArray<string>({ items: topicIds }),
    count: 0,
    goal: random(amount.min, amount.max),
    blocksCompleted: 0,
    timerDone: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const currentTopic = topics[state.currentTopicId];
  const { addExp } = useGameStore();

  // Functions
  function updateCurrentTopicTitle(newTitle: string) {
    updateTopic({
      id: currentTopic.id,
      updates: {
        title: newTitle,
      },
    });
  }

  function nextTopicReset(nextTopicId: string) {
    dispatch({
      type: "Next Topic",
      payload: {
        minGoal: amount.min,
        maxGoal: amount.max,
        nextTopicId: nextTopicId,
      },
    });

    scrollToTop();
  }

  function finishCurrentTopic() {
    updateCurrentTopicStats();
    updateExp();

    nextTopicReset(
      randomFromArray({ items: topicIds, currentItem: state.currentTopicId }),
    );
  }

  function updateCurrentTopicStats() {
    // Update total study time / amount
    const updates = {
      ...(practiceMode === "numQuestions" && {
        totalCount: currentTopic.totalCount + state.count,
      }),
      ...(practiceMode === "timer" && {
        totalTime: currentTopic.totalTime + state.goal,
      }),
    };

    // update topic stats
    updateTopic({
      id: currentTopic.id,
      updates,
    });
  }

  function updateExp() {
    const expGained =
      practiceMode === "numQuestions"
        ? Math.round(state.count * EXP_RATES.practiceQuestion)
        : state.goal * EXP_RATES.practiceTime;

    addExp(expGained);
  }

  function nextButtonDisabled() {
    if (practiceMode === "numQuestions") {
      return state.count < state.goal;
    } else {
      return !state.timerDone;
    }
  }

  // Render
  if (topicIds.length === 0) return <Redirect to="/practice/1" />;
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
          <PracticeCounter
            count={state.count}
            setCount={(nextCount) =>
              dispatch({ type: "Set Count", payload: nextCount })
            }
            goal={state.goal}
          />
        )}

        {practiceMode === "timer" && (
          <CountdownTimer
            durationInMs={minutesToMs(state.goal)}
            startAutomatically={false}
            handleNext={() => dispatch({ type: "Toggle Timer" })}
            refreshDep={state.blocksCompleted}
          />
        )}

        <CardButtonGrid
          mt={theme.spacing.workflowStepButtonSpacing}
          buttons={[
            {
              text: "Next Topic",
              color: "green",
              disabled: nextButtonDisabled(),
              onClick: finishCurrentTopic,
            },
            {
              text: "Settings",
              to: "/practice/1",
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
              currentId={state.currentTopicId}
              handleSwitchTopic={(nextId) => nextTopicReset(nextId)}
            />
          </>
        )}
      </WorkflowStep>
    </>
  );
}
