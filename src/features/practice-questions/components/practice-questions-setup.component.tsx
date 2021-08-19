import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList, VStack } from "@chakra-ui/react";

import { TPracticeMode } from "features/practice-questions/shared/practice-questions.types";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import {
  selectPracticeQuestionsState,
  selectPracticeTopicIds,
} from "features/practice-questions/redux/practice-questions.selectors";
import { theme } from "shared/styles/theme";

import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import {
  setAmount,
  setPracticeMode,
} from "features/practice-questions/redux/practice-questions.slice";
import { NumberInputGroup } from "shared/components/form/number-input-group.component";
import { RadioButtonGroup } from "shared/components/form/radio-button-group.component";
import { PracticeTopics } from "./practice-topics.component";

export function PracticeQuestionsSetup() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { amount, practiceMode } = useAppSelector(selectPracticeQuestionsState);
  const [minAmount, setMinAmount] = useState(amount.min);
  const [maxAmount, setMaxAmount] = useState(amount.max);

  const topicIds = useAppSelector(selectPracticeTopicIds);
  const nextDisabled = maxAmount < minAmount || topicIds.length === 0;

  function updatePracticeMode(nextValue: TPracticeMode) {
    if (nextValue !== practiceMode) {
      dispatch(setPracticeMode(nextValue));
    }
  }

  function handleSubmit() {
    // update only if needed
    if (minAmount !== amount.min || maxAmount !== amount.max) {
      dispatch(setAmount({ min: minAmount, max: maxAmount }));
    }

    history.push("/practice-questions/2");
  }

  return (
    <WorkflowStep
      breadcrumbLinks={["Practice Questions", "Setup"]}
      buttons={
        <CardButtonGrid
          mt={theme.spacing.workflowStepButtonSpacing}
          buttons={[
            {
              text: "Start",
              color: "green",
              onClick: handleSubmit,
              disabled: nextDisabled,
            },
          ]}
        />
      }
      message={
        <>
          <Box>Use this workflow when doing practice problems.</Box>
          <UnorderedList>
            <ListItem>
              Practice Mode: track questions completed or time studied
            </ListItem>
            <ListItem>
              Topics: these can be different subjects (e.g. Math, Science) or
              different topics within a subject (e.g. Multiplication, Division)
            </ListItem>
            <ListItem>
              The amount will be randomly set to a number between min and max.
            </ListItem>
          </UnorderedList>
        </>
      }
      nextUrl="/practice-questions/2"
    >
      <VStack spacing={7} alignItems="start">
        <RadioButtonGroup
          id="practiceMode"
          labelText="Practice Mode:"
          onChange={(nextValue: TPracticeMode) => updatePracticeMode(nextValue)}
          value={practiceMode}
          values={[
            { text: "Number of Questions", value: "numQuestions" },
            { text: "Timer", value: "timer" },
          ]}
        />

        <NumberInputGroup
          id="minAmount"
          labelText={
            practiceMode === "numQuestions"
              ? "Min Amount"
              : "Min Amount (minutes):"
          }
          min={1}
          max={25}
          value={minAmount}
          onChange={(_, num) => setMinAmount(num)}
        />

        <NumberInputGroup
          id="maxAmount"
          labelText={
            practiceMode === "numQuestions"
              ? "Max Amount"
              : "Max Amount (minutes):"
          }
          min={minAmount}
          max={25}
          value={maxAmount}
          onChange={(_, num) => setMaxAmount(num)}
        />

        <PracticeTopics />
      </VStack>
    </WorkflowStep>
  );
}
