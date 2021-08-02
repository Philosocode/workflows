import {
  FormControl,
  FormLabel,
  Input as InputBase,
  InputProps,
  useColorModeValue,
} from "@chakra-ui/react";

export interface IProps extends InputProps {
  id: string;
  label: string;

  showLabel?: boolean;
}
export function InputWithLabel(props: IProps) {
  const borderColor = useColorModeValue("gray.400", "gray.500");

  return (
    <FormControl id={props.id}>
      <FormLabel
        mb="-px"
        position={props.showLabel ? "relative" : "absolute"}
        transform={props.showLabel ? "none" : "translateX(-9999px)"}
      >
        {props.label}
      </FormLabel>
      <InputBase
        autoComplete="off"
        focusBorderColor={borderColor}
        variant="flushed"
        {...props}
      />
    </FormControl>
  );
}
