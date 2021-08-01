import { Box, Text } from "@chakra-ui/react";
import { RiLightbulbFlashFill } from "react-icons/ri";

import { ModalContent } from "modal/components/modal-content.component";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useRandom } from "shared/hooks/use-random.hook";
import { allHooksArray } from "hook/shared/hooks.data";
import { Button } from "shared/components/button.component";
import { HoverIcon } from "icon/components/hover-icon.component";
import { ModalWrapper } from "./modal-wrapper.component";

export function RandoHookModal() {
  const [modalShowing, toggleModal] = useToggle(false);
  const [hook, getRandomHook] = useRandom(allHooksArray);

  return (
    <>
      <Box>
        <HoverIcon as={RiLightbulbFlashFill} onClick={toggleModal} />
      </Box>
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header="Rando Hook"
          body={
            <Box>
              <Text fontSize="md">{hook}</Text>
            </Box>
          }
          footer={
            <Button color="green" onClick={getRandomHook}>
              New Hook
            </Button>
          }
        />
      </ModalWrapper>
    </>
  );
}
