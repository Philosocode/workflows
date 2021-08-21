import {
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  RadioGroupProps,
  RadioProps,
  useBreakpointValue,
} from "@chakra-ui/react";

interface IRadioValue {
  text: string;
  value: string;
  props?: RadioProps;
}

interface IProps extends Partial<RadioGroupProps> {
  id: string;
  labelText: string;
  values: IRadioValue[];
}
export function RadioButtonGroup({ id, labelText, values, ...rest }: IProps) {
  const radioSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <FormControl id={id}>
      <FormLabel>{labelText}</FormLabel>
      <RadioGroup {...rest}>
        <Stack>
          {values.map((value) => (
            <Radio
              key={value.text}
              value={value.value}
              colorScheme="green"
              size={radioSize}
              {...value.props}
            >
              {value.text}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}
