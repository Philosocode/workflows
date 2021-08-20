import { FormControl, FormLabel, Switch, SwitchProps } from "@chakra-ui/react";

interface IProps extends SwitchProps {
  id: string;
  labelText: string;
}
export function SwitchGroup({ id, labelText, ...rest }: IProps) {
  return (
    <FormControl id={id}>
      <FormLabel>{labelText}</FormLabel>
      <Switch colorScheme="green" size="lg" {...rest} />
    </FormControl>
  );
}
