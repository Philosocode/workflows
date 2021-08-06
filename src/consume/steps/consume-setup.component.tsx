import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";

import { TMaterialType } from "consume/redux/consume.types";
import { useAppSelector } from "shared/redux/store";
import { setMaterialData } from "consume/redux/consume.slice";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "step/step.slice";
import { useState } from "react";

import { CardButton } from "shared/components/button/card-button.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { FormLabel } from "form/components/form-label.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";

interface IFormProps {
  materialType: TMaterialType;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}
export function ConsumeSetup() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const dispatch = useDispatch();
  const { studyBlockTime, shouldPlayAlarm } =
    useAppSelector(selectConsumeState);

  const nextStep = useAppSelector(selectNextStep);

  const { control, formState, handleSubmit, register, getValues } =
    useForm<IFormProps>({
      mode: "onChange",
    });

  function onSubmit(values: IFormProps) {
    dispatch(setMaterialData(values));
    setRedirectUrl(`/consume/${nextStep}`);
  }

  function skipToStudy() {
    dispatch(setMaterialData(getValues()));
    setRedirectUrl(`/consume/${CONSUME_PAGE_NUMBERS.TIMER}`);
  }

  const focusBorderColor = useColorModeValue("green.500", "green.200");

  if (redirectUrl) return <Redirect to={redirectUrl} />;

  return (
    <ConsumeWorkflowStep
      message="What are you studying today?"
      showButton={false}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={7} alignItems="start">
          <FormControl id="materialType">
            <FormLabel>Material Type:</FormLabel>
            <RadioGroup>
              <Stack>
                <Radio
                  {...register("materialType", { required: true })}
                  value="reading"
                  colorScheme="green"
                  size="lg"
                >
                  Reading
                </Radio>
                <Radio
                  {...register("materialType", { required: true })}
                  value="watching"
                  colorScheme="green"
                  size="lg"
                >
                  Watching
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="studyBlockTime">
            <FormLabel>Study Block Time (minutes):</FormLabel>
            <Controller
              name="studyBlockTime"
              control={control}
              defaultValue={studyBlockTime}
              render={({ field }) => (
                <NumberInput
                  {...field}
                  maxW="100px"
                  mr="2rem"
                  min={0}
                  max={25}
                  focusBorderColor={focusBorderColor}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              )}
            />
          </FormControl>

          <FormControl id="shouldPlayAlarm">
            <FormLabel>Should Play Alarm:</FormLabel>
            <Switch
              colorScheme="green"
              size="lg"
              {...register("shouldPlayAlarm")}
              defaultChecked={shouldPlayAlarm}
            />
          </FormControl>
          <CardButtonGrid mt={theme.spacing.workflowStepButtonSpacing}>
            <CardButton
              color="green"
              disabled={!formState.isValid}
              type="submit"
            >
              Next
            </CardButton>
            <CardButton disabled={!formState.isValid} onClick={skipToStudy}>
              Skip to Study
            </CardButton>
          </CardButtonGrid>
        </VStack>
      </form>
    </ConsumeWorkflowStep>
  );
}
