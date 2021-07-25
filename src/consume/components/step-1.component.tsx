import {
  Input,
  FormControl,
  FormLabel,
  VStack,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { TMaterialType } from "consume/logic/consume.types";
import { Button } from "shared/components/button.component";
import { stepOne } from "consume/logic/consume.slice";
import { WorkflowStep } from "shared/components/workflow-step.component";

interface IFormProps {
  materialName: string;
  materialType: TMaterialType;
}
export function Step1() {
  const dispatch = useDispatch();

  const { formState, handleSubmit, register } = useForm<IFormProps>({
    mode: "onChange",
  });

  function onSubmit(values: IFormProps) {
    dispatch(stepOne(values));
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
            />
          </FormControl>

          <FormControl id="materialType">
            <FormLabel>Material Type</FormLabel>
            <RadioGroup>
              <Stack>
                <Radio
                  {...register("materialType", { required: true })}
                  value="reading"
                >
                  Reading
                </Radio>
                <Radio
                  {...register("materialType", { required: true })}
                  value="watching"
                >
                  Watching
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Button color="green" disabled={!formState.isValid} type="submit">
            Next
          </Button>
        </VStack>
      </form>
    </WorkflowStep>
  );
}
