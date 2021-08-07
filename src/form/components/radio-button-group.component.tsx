import {
  FormControl,
  RadioGroup,
  Stack,
  Radio,
  RadioGroupProps,
  RadioProps,
} from "@chakra-ui/react";

import { FormLabel } from "./form-label.component";

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
              size="lg"
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
