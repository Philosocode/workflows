import { Box, Text } from "@chakra-ui/react";
import { ProgressBar } from "shared/components/progress/progress-bar.component";
import { useAppSelector } from "shared/redux/store";
import { theme } from "shared/styles/theme";
import { EXP_LIST } from "./game.constants";

export function LevelStatus() {
  const { level, exp } = useAppSelector((state) => state.game);
  const expRequired = EXP_LIST[level];

  return (
    <Box w="full">
      <Text
        color="whiteAlpha.500"
        fontSize="xs"
        sx={theme.typography.condensed}
      >
        LVL {level}
      </Text>
      <ProgressBar currentValue={exp} maxValue={expRequired} mt={1} />
    </Box>
  );
}
