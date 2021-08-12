import { StackProps, VStack } from "@chakra-ui/react";
import { useTheme } from "shared/hooks/use-theme.hook";

export function CardWrapper(props: StackProps) {
  const dlTheme = useTheme();

  return (
    <VStack
      alignItems="start"
      border="1px solid"
      bg={dlTheme.components.card.bg}
      borderColor={dlTheme.components.card.borderColor}
      rounded="md"
      shadow="sm"
      {...props}
    />
  );
}
