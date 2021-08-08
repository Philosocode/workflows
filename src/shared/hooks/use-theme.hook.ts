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
      },
      cardBlack: {
        border: "1px solid",
        borderColor: useColorModeValue("gray.300", "gray.600"),
      },
    },
    colors: {
      green: useColorModeValue("green.500", "green.200"),
    },
  };
}
