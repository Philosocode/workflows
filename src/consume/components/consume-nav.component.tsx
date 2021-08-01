import { HStack } from "@chakra-ui/react";

import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "./toggle-theme-button.component";

export function ConsumeNav() {
  return (
    <HStack as="nav" justify="space-between" mt={5} mb={10}>
      <HStack>
        <RandoHookModal />
        <GetUnstuckModal />
      </HStack>
      <HStack>
        <ToggleThemeButton />
        <StudyBlockCounter />
      </HStack>
    </HStack>
  );
}
