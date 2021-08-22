import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import { EXP_LIST, MAX_LEVEL } from "../logic/game.constants";
import { theme } from "shared/styles/theme";
import { useGameStore } from "../logic/game.store";

import { ProgressBar } from "shared/components/progress/progress-bar.component";

export function LevelStatus() {
  const { level, exp } = useGameStore();
  const expRequired = EXP_LIST[level];

  const currentValue = level === MAX_LEVEL ? 1 : exp;
  const maxValue = level === MAX_LEVEL ? 1 : expRequired;

  return (
    <Box w="full">
      <Text
        color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
        fontSize="xs"
        sx={theme.typography.condensed}
      >
        LVL {level}
      </Text>
      <ProgressBar currentValue={currentValue} maxValue={maxValue} mt={1} />
    </Box>
  );
}
