import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
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
import {
  goToStudy,
  nextStep,
  setMaterialData,
} from "consume/redux/consume.slice";
import {
  selectShouldPlayAlarm,
  selectStudyBlockTime,
} from "consume/redux/consume.selectors";

import { Message } from "message/components/message.component";
import { CardButton } from "shared/components/button/card-button.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { FormLabel } from "form/components/form-label.component";

interface IFormProps {
  materialType: TMaterialType;
  studyBlockTime: number;
  shouldPlayAlarm: boolean;
}
export function GetMaterialData() {
  const dispatch = useDispatch();
  const studyBlockTime = useAppSelector(selectStudyBlockTime);
  const shouldPlayAlarm = useAppSelector(selectShouldPlayAlarm);

  const { control, formState, handleSubmit, register, getValues } =
    useForm<IFormProps>({
      mode: "onChange",
    });

  function onSubmit(values: IFormProps) {
    dispatch(setMaterialData(values));
    dispatch(nextStep());
  }

  function skipToStudy() {
    dispatch(setMaterialData(getValues()));
    dispatch(goToStudy());
  }

  const focusBorderColor = useColorModeValue("green.500", "green.200");

  return (
    <>
      <Message>What are you studying today?</Message>

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

          <CardButtonGrid>
            <CardButton disabled={!formState.isValid} type="submit">
              Next
            </CardButton>
            <CardButton
              disabled={!formState.isValid}
              color="gray"
              onClick={skipToStudy}
            >
              Skip to Study
            </CardButton>
          </CardButtonGrid>
        </VStack>
      </form>
    </>
  );
}