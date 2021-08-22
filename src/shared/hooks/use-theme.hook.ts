import { useColorModeValue } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";

export function useTheme() {
  return {
    components: {
      card: {
        bg: useColorModeValue(
          theme.colors.cardBackground.light,
          theme.colors.cardBackground.dark,
        ),
        borderColor: useColorModeValue("gray.300", "gray.600"),
      },
      cardOutline: {
        bg: "none",
        border: "1px solid",
        borderColor: useColorModeValue("gray.200", "gray.700"),
      },
    },
    colors: {
      green: useColorModeValue("green.500", "green.200"),
      text: useColorModeValue("gray.800", "gray.50"),
      textInverse: useColorModeValue("gray.50", "gray.800"),
      textFaint: useColorModeValue("gray.600", "gray.300"),
    },
  };
}
