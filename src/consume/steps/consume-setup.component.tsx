import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { TMaterialType } from "consume/redux/consume.types";
import { useAppSelector } from "shared/redux/store";
import { setMaterialData } from "consume/redux/consume.slice";
import { selectConsumeState } from "consume/redux/consume.selectors";
import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "step/step.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { FormLabel } from "form/components/form-label.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { RadioButtonGroup } from "form/components/radio-button-group.component";
import { SwitchGroup } from "form/components/switch-group.component";

interface IFormProps {
  materialType: TMaterialType;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}
export function ConsumeSetup() {
  const history = useHistory();
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
    history.push(`/consume/${nextStep}`);
  }

  function skipToStudy() {
    dispatch(setMaterialData(getValues()));
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.TIMER}`);
  }

  const focusBorderColor = useColorModeValue("green.500", "green.200");

  return (
    <ConsumeWorkflowStep
      message="What are you studying today?"
      showButton={false}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={7} alignItems="start">
          <RadioButtonGroup
            id="materialType"
            labelText="Material Type:"
            values={[
              {
                text: "Reading",
                value: "reading",
                props: { ...register("materialType", { required: true }) },
              },
              {
                text: "Watching",
                value: "watching",
                props: { ...register("materialType", { required: true }) },
              },
            ]}
          />

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

          <SwitchGroup
            id="shouldPlayAlarm"
            labelText="Should Play Alarm:"
            {...register("shouldPlayAlarm")}
            defaultChecked={shouldPlayAlarm}
          />

          <CardButtonGrid
            mt={theme.spacing.workflowStepButtonSpacing}
            buttons={[
              {
                text: "Next",
                color: "green",
                disabled: !formState.isValid,
                type: "submit",
              },
              {
                text: "Skip To Study",
                disabled: !formState.isValid,
                onClick: skipToStudy,
              },
            ]}
          />
        </VStack>
      </form>
    </ConsumeWorkflowStep>
  );
}
