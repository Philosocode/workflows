import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  VStack,
  FormControl,
  RadioGroup,
  Stack,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
} from "@chakra-ui/react";

import { TPracticeMode } from "practice-questions/shared/practice-questions.types";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectPracticeQuestionsState } from "practice-questions/redux/practice-questions.selectors";
import { theme } from "shared/styles/theme";

import { FormLabel } from "form/components/form-label.component";
import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import {
  setAmount,
  setPracticeMode,
} from "practice-questions/redux/practice-questions.slice";

export function PracticeQuestionsSetup() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const storeState = useAppSelector(selectPracticeQuestionsState);
  const [minAmount, setMinAmount] = useState(storeState.amount.min);
  const [maxAmount, setMaxAmount] = useState(storeState.amount.max);
  const [mode, setMode] = useState<TPracticeMode>("numQuestions");

  const focusBorderColor = useColorModeValue("green.500", "green.200");
  const nextDisabled = maxAmount < minAmount;

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
        <FormControl id="practiceMode">
          <FormLabel>Practice Mode:</FormLabel>
          <RadioGroup
            onChange={(nextValue: TPracticeMode) => setMode(nextValue)}
            value={mode}
          >
            <Stack>
              <Radio value="numQuestions" colorScheme="green" size="lg">
                Number of Questions
              </Radio>
              <Radio value="timer" colorScheme="green" size="lg">
                Timer
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="minAmount">
          <FormLabel>Min Amount (minutes):</FormLabel>
          <NumberInput
            maxW="100px"
            mr="2rem"
            min={1}
            max={25}
            value={minAmount}
            onChange={(_, num) => setMinAmount(num)}
            focusBorderColor={focusBorderColor}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl id="maxAmount">
          <FormLabel>Max Amount (minutes):</FormLabel>
          <NumberInput
            maxW="100px"
            mr="2rem"
            min={minAmount}
            max={25}
            value={maxAmount}
            onChange={(_, num) => setMaxAmount(num)}
            focusBorderColor={focusBorderColor}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </VStack>
    </WorkflowStep>
  );
}
