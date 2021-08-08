import { useState } from "react";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

import { TPracticeMode } from "practice-questions/shared/practice-questions.types";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import {
  selectPracticeQuestionsState,
  selectPracticeTopicIds,
} from "practice-questions/redux/practice-questions.selectors";
import { theme } from "shared/styles/theme";

import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import {
  setAmount,
  setPracticeMode,
} from "practice-questions/redux/practice-questions.slice";
import { NumberInputGroup } from "form/components/number-input-group.component";
import { RadioButtonGroup } from "form/components/radio-button-group.component";
import { PracticeTopics } from "./practice-topics.component";

export function PracticeQuestionsSetup() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const storeState = useAppSelector(selectPracticeQuestionsState);
  const [minAmount, setMinAmount] = useState(storeState.amount.min);
  const [maxAmount, setMaxAmount] = useState(storeState.amount.max);
  const [mode, setMode] = useState<TPracticeMode>("numQuestions");

  const topicIds = useAppSelector(selectPracticeTopicIds);
  const nextDisabled = maxAmount < minAmount || topicIds.length === 0;

  function handleSubmit() {
    // update only if needed
    if (
      minAmount !== storeState.amount.min ||
      maxAmount !== storeState.amount.max
    ) {
      dispatch(setAmount({ min: minAmount, max: maxAmount }));
    }

    if (mode !== storeState.practiceMode) {
      dispatch(setPracticeMode(mode));
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
      message="Use this workflow when doing practice problems."
      nextUrl="/practice-questions/2"
    >
      <VStack spacing={7} alignItems="start">
        <RadioButtonGroup
          id="practiceMode"
          labelText="Practice Mode:"
          onChange={(nextValue: TPracticeMode) => setMode(nextValue)}
          value={mode}
          values={[
            { text: "Number of Questions", value: "numQuestions" },
            { text: "Timer", value: "timer" },
          ]}
        />

        <NumberInputGroup
          id="minAmount"
          labelText="Min Amount (minutes):"
          min={1}
          max={25}
          value={minAmount}
          onChange={(_, num) => setMinAmount(num)}
        />

        <NumberInputGroup
          id="maxAmount"
          labelText="Max Amount (minutes):"
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
