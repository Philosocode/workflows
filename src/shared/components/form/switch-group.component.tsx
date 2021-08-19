import { FormControl, Switch, SwitchProps } from "@chakra-ui/react";

import { FormLabel } from "./form-label.component";

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
