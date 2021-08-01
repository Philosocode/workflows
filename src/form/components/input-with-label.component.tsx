import {
  FormControl,
  FormLabel,
  Input as InputBase,
  InputProps,
} from "@chakra-ui/react";

export interface IProps extends InputProps {
  id: string;
  label: string;

  showLabel?: boolean;
}
export function InputWithLabel(props: IProps) {
  return (
    <FormControl id={props.id}>
      <FormLabel
        mb="-px"
        sx={{
          position: !props.showLabel && "absolute",
          transform: !props.showLabel && "translateX(-9999px)",
        }}
      >
        {props.label}
      </FormLabel>
      <InputBase focusBorderColor="green.500" variant="flushed" {...props} />
    </FormControl>
  );
}
