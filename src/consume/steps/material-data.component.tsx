import {
  Input,
  FormControl,
  FormLabel,
  VStack,
  Radio,
  RadioGroup,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ButtonGroup,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { TMaterialType } from "consume/logic/consume.types";
import { Button } from "shared/components/button.component";
import { goToStudy, nextStep, stepOne } from "consume/logic/consume.slice";
import { WorkflowStep } from "shared/components/workflow-step.component";

interface IFormProps {
  materialName: string;
  materialType: TMaterialType;
  studyBlockTime: number;
}
export function MaterialData() {
  const dispatch = useDispatch();

  const { control, formState, handleSubmit, register, getValues } =
    useForm<IFormProps>({
      mode: "onChange",
    });

  function onSubmit(values: IFormProps) {
    dispatch(stepOne(values));
    dispatch(nextStep());
  }

  function skipToStudy(event: React.FormEvent) {
    event.preventDefault();
    dispatch(stepOne(getValues()));
    dispatch(goToStudy());
  }

  return (
    <WorkflowStep messageContent="What are you reading / watching today?">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="25px" alignItems="start">
          <FormControl id="materialName">
            <FormLabel>Material Name</FormLabel>
            <Input
              {...register("materialName", { required: true })}
              placeholder="Name of Material"
              required
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl id="materialType">
            <FormLabel>Material Type</FormLabel>
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
            <FormLabel>Study Block Time (minutes)</FormLabel>
            <Controller
              name="studyBlockTime"
              control={control}
              defaultValue={0}
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
            <Button color="green" disabled={!formState.isValid} type="submit">
              Next
            </Button>
            <Button
              color="gray"
              disabled={!formState.isValid}
              type="submit"
              onClick={skipToStudy}
            >
              Skip to Study
            </Button>
          </ButtonGroup>
        </VStack>
      </form>
    </WorkflowStep>
  );
}
