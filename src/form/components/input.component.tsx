import { FormControl, FormLabel, Input as InputBase } from "@chakra-ui/react";

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}
export function Input(props: IProps) {
  return (
    <FormControl id={props.id}>
      <FormLabel>Price</FormLabel>
      <InputBase />
    </FormControl>
  );
}
