import { StackProps, Text, VStack } from "@chakra-ui/react";

import { useTheme } from "shared/hooks/use-theme.hook";
import { theme } from "shared/styles/theme";

interface IProps extends StackProps {
  cornerText?: string;
  variant?: "outline";
}
export function CardWrapper({
  children,
  cornerText,
  variant,
  ...rest
}: IProps) {
  const dlTheme = useTheme();

  return (
    <VStack
      alignItems="start"
      border="1px solid"
      bg={dlTheme.components.card.bg}
      sx={
        variant === "outline"
          ? dlTheme.components.cardOutline
          : dlTheme.components.card
      }
      rounded="md"
      position="relative"
      shadow="sm"
      {...rest}
    >
      {cornerText && (
        <Text
          position="absolute"
          top={3}
          left={4}
          fontSize={theme.typography.fontSize.card}
          textColor={dlTheme.colors.textFaint}
          sx={theme.typography.condensed}
        >
          {cornerText}
        </Text>
      )}
      {children}
    </VStack>
  );
}
