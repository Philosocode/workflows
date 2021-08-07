import { FormLabel as FormLabelChakra, FormLabelProps } from "@chakra-ui/react";
import { theme } from "shared/styles/theme";

interface IProps extends FormLabelProps {}
export function FormLabel(props: IProps) {
  return (
    <FormLabelChakra sx={theme.typography.condensed} fontSize="sm" {...props} />
  );
}
