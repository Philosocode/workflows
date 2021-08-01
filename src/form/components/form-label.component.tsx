import { FormLabel as FormLabelChakra, FormLabelProps } from "@chakra-ui/react";

interface IProps extends FormLabelProps {}
export function FormLabel(props: IProps) {
  return (
    <FormLabelChakra
      textTransform="uppercase"
      letterSpacing="1px"
      fontSize="sm"
      fontWeight="bold"
      {...props}
    />
  );
}
