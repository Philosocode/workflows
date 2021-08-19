import { StackProps, VStack } from "@chakra-ui/react";
import { theme } from "shared/styles/theme";

interface IProps extends StackProps {}
export function Messages(props: IProps) {
  return (
    <VStack
      spacing={theme.spacing.messageBoxSpacing}
      alignItems="start"
      {...props}
    />
  );
}
