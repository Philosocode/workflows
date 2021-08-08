import { StackProps, VStack } from "@chakra-ui/react";
import { useTheme } from "shared/hooks/use-theme.hook";

export function CardWrapper(props: StackProps) {
  const dlTheme = useTheme();

  return (
    <VStack
      alignItems="start"
      sx={dlTheme.components.card}
      rounded="md"
      shadow="sm"
      {...props}
    />
  );
}
