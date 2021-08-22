import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList, VStack } from "@chakra-ui/react";

import { TPracticeMode } from "features/practice/logic/practice.types";
import { usePracticeStore } from "../logic/practice.store";
import { theme } from "shared/styles/theme";

import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { NumberInputGroup } from "shared/components/form/number-input-group.component";
import { RadioButtonGroup } from "shared/components/form/radio-button-group.component";
import { PracticeTopics } from "./practice-topics.component";

export function PracticeQuestionsSetup() {
  const history = useHistory();
  const { amount, practiceMode, topicIds, setPracticeMode, setAmount } =
    usePracticeStore();

  const [minAmount, setMinAmount] = useState(amount.min);
  const [maxAmount, setMaxAmount] = useState(amount.max);

  const nextDisabled = maxAmount < minAmount || topicIds.length === 0;

  function updatePracticeMode(nextValue: TPracticeMode) {
    if (nextValue !== practiceMode) {
      setPracticeMode(nextValue);
    }
  }

  function handleSubmit() {
    // update only if needed
    if (minAmount !== amount.min || maxAmount !== amount.max) {
      setAmount({ min: minAmount, max: maxAmount });
    }

    history.push("/practice/2");
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
              {practiceMode === "numQuestions"
                ? "The amount of questions "
                : "The amount of time "}
              will be randomly set to a number between min and max.
            </ListItem>
          </UnorderedList>
        </>
      }
      nextUrl="/practice/2"
    >
      <VStack spacing={theme.spacing.formGroupSpacing} alignItems="start">
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
              : "Min Time (minutes):"
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
              : "Max Time (minutes):"
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
