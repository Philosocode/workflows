import { Box, Text } from "@chakra-ui/react";
import { RiLightbulbFlashFill } from "react-icons/ri";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { useRandom } from "shared/hooks/use-random.hook";
import { allHooksArray } from "hook/shared/hooks.data";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "modal/components/modal-content.component";
import { ModalWrapper } from "./modal-wrapper.component";
import { IconButton } from "shared/components/icon-button.component";

export function RandoHookModal() {
  const [modalShowing, toggleModal] = useToggle(false);
  const [hook, getRandomHook] = useRandom(allHooksArray);

  return (
    <>
      <Box>
        <IconButton
          aria-label="Get Unstuck"
          icon={<RiLightbulbFlashFill />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header="Rando Hook"
          body={
            <Box>
              <Text fontSize="md">{hook}</Text>
            </Box>
          }
          footer={<Button onClick={getRandomHook}>Next</Button>}
        />
      </ModalWrapper>
    </>
  );
}
