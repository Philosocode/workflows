import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface IProps extends NumberInputProps {
  id: string;
  labelText: string;
}
export function NumberInputGroup({ id, labelText, ...rest }: IProps) {
  const focusBorderColor = useColorModeValue("green.500", "green.200");

  return (
    <FormControl id={id}>
      <FormLabel>{labelText}</FormLabel>
      <NumberInput maxW="100px" focusBorderColor={focusBorderColor} {...rest}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
}
