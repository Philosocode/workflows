import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  ButtonGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
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
import {
  goToStudy,
  nextStep,
  setMaterialData,
} from "consume/redux/consume.slice";
import { selectStudyBlockTime } from "consume/redux/consume.selectors";

import { Button } from "shared/components/button.component";
import { Message } from "message/components/message.component";
import { theme } from "theme";

interface IFormProps {
  materialType: TMaterialType;
  studyBlockTime: number;
}
export function GetMaterialData() {
  const studyBlockTime = useAppSelector(selectStudyBlockTime);
  const dispatch = useDispatch();
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

  const styles = {
    focusBorderColor: useColorModeValue("green.500", "green.200"),
  };

  return (
    <>
      <Message>What are you studying today?</Message>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={7} alignItems="start">
          <FormControl id="materialType">
            <FormLabel fontWeight="bold">Material Type:</FormLabel>
            <RadioGroup>
              <Stack>
                <Radio
                  {...register("materialType", { required: true })}
                  value="reading"
                  colorScheme="green"
                >
                  Reading
                </Radio>
                <Radio
                  {...register("materialType", { required: true })}
                  value="watching"
                  colorScheme="green"
                >
                  Watching
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="studyBlockTime">
            <FormLabel fontWeight="bold">Study Block Time (minutes):</FormLabel>
            <Controller
              name="studyBlockTime"
              control={control}
              defaultValue={studyBlockTime}
              render={({ field }) => (
                <NumberInput {...field} maxW="100px" mr="2rem" min={0} max={25}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              )}
            />
          </FormControl>

          <ButtonGroup>
            <Button disabled={!formState.isValid} type="submit">
              Next
            </Button>
            <Button
              color="gray"
              disabled={!formState.isValid}
              onClick={skipToStudy}
            >
              Skip to Study
            </Button>
          </ButtonGroup>
        </VStack>
      </form>
    </>
  );
}
