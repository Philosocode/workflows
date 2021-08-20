import {
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  RadioGroupProps,
  RadioProps,
  theme,
  useMediaQuery,
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
  const [isSmall] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
              size={isSmall ? "md" : "lg"}
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
