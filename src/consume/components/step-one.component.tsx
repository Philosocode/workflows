import {
  Input,
  FormControl,
  FormLabel,
  VStack,
  Box,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Message } from "message/components/message.component";
import { useForm } from "react-hook-form";
import { Button } from "shared/components/button.component";

export function StepOne() {
  interface IFormProps {
    materialName: string;
    materialType: "reading" | "watching";
  }
  const { formState, handleSubmit, register } = useForm<IFormProps>({
    mode: "onChange",
  });

  function onSubmit(values: IFormProps) {
    console.log(values);
  }

  return (
    <Box>
      <Message>What are you reading / watching today?</Message>
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
                <Radio {...register("materialType")} value="reading">
                  Reading
                </Radio>
                <Radio {...register("materialType")} value="watching">
                  Watching
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <Button color="green" disabled={!formState.isValid}>
            Next
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
