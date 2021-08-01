import { HStack } from "@chakra-ui/react";

import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { StudyBlockCounter } from "./study-block-counter.component";

export function ConsumeNav() {
  return (
    <HStack as="nav" justify="space-between" mt={5} mb={10}>
      <HStack spacing={5}>
        <RandoHookModal />
        <GetUnstuckModal />
      </HStack>
      <StudyBlockCounter />
    </HStack>
  );
}
