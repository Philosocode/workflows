import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { FormLabel } from "./form-label.component";

interface IProps extends NumberInputProps {
  id: string;
  labelText: string;
}
export function NumberInputGroup(props: IProps) {
  const focusBorderColor = useColorModeValue("green.500", "green.200");

  return (
    <FormControl id={props.id}>
      <FormLabel>{props.labelText}</FormLabel>
      <NumberInput maxW="100px" focusBorderColor={focusBorderColor} {...props}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}
