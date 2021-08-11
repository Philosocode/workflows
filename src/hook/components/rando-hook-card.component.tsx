import { Text } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";

import { commonHooks } from "hook/shared/hooks.data";
import { useRandom } from "shared/hooks/use-random.hook";
import { theme } from "shared/styles/theme";
import { useTheme } from "shared/hooks/use-theme.hook";

import { CardWrapper } from "shared/components/card/card-wrapper.component";
import { IconButton } from "shared/components/icon-button.component";

export function RandoHookCard() {
  const [hook, getRandomHook] = useRandom(commonHooks);
  const dllTheme = useTheme();

  return (
    <CardWrapper px={{ base: 5, md: 10 }} py={8} mb={10} position="relative">
      <IconButton
        aria-label="New Hook"
        onClick={getRandomHook}
        icon={<FaRedo />}
        position="absolute"
        right={5}
        top={5}
      />
      <Text
        color={dllTheme.components.card.textColorFaint}
        fontSize="sm"
        sx={theme.typography.condensed}
      >
        Random Hook
      </Text>
      <Text
        textColor={dllTheme.colors.text}
        fontSize={{ base: "xl", md: "2xl" }}
      >
        {hook}
      </Text>
    </CardWrapper>
  );
}
