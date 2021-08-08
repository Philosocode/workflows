import { StackProps, VStack } from "@chakra-ui/react";
import { useTheme } from "shared/hooks/use-theme.hook";

export function CardWrapper(props: StackProps) {
  const dlTheme = useTheme();

  return (
    <VStack
      alignItems="start"
      bg={dlTheme.components.card.bg}
      rounded="md"
      shadow="sm"
      {...props}
    />
  );
}
