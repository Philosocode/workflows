import { HStack } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { selectStep } from "consume/redux/consume.selectors";

import { ConsumeSettings } from "./consume-settings.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";
import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "./toggle-theme-button.component";

export function ConsumeNav() {
  const step = useSelector(selectStep);

  return (
    <HStack as="nav" justify="space-between" mt={5} mb={10}>
      <HStack>
        <RandoHookModal />
        <GetUnstuckModal />
        {step > 1 && <ConsumeResetModal />}
      </HStack>
      <HStack>
        {step > 1 && <ConsumeSettings />}
        <ToggleThemeButton />
        <StudyBlockCounter />
      </HStack>
    </HStack>
  );
}
