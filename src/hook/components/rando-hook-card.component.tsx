import { Text } from "@chakra-ui/react";
import { FaRedo } from "react-icons/fa";
import { commonHooks } from "hook/shared/hooks.data";
import { CardWrapper } from "shared/components/card/card-wrapper.component";
import { IconButton } from "shared/components/icon-button.component";
import { useRandom } from "shared/hooks/use-random.hook";
import { theme } from "shared/styles/theme";

export function RandoHookCard() {
  const [hook, getRandomHook] = useRandom(commonHooks);

  return (
    <>
      <CardWrapper px={{ base: 5, md: 10 }} py={8} mb={10} position="relative">
        <IconButton
          aria-label="New Hook"
          onClick={getRandomHook}
          icon={<FaRedo />}
          position="absolute"
          right={5}
          top={5}
        />
        <Text color="gray.400" fontSize="sm" sx={theme.typography.condensed}>
          Random Hook
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }}>{hook}</Text>
      </CardWrapper>
    </>
  );
}
