import { Box, Icon, Text } from "@chakra-ui/react";
import { RiLightbulbFlashFill } from "react-icons/ri";

import { Modal } from "modal/components/modal.component";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useRandom } from "shared/hooks/use-random.hook";
import { allHooksArray } from "hook/data/hooks.data";
import { Button } from "shared/components/button.component";

export function RandoHookModal() {
  const [modalShowing, toggleModal] = useToggle(false);
  const [hook, getRandomHook] = useRandom(allHooksArray, allHooksArray[0]);

  return (
    <>
      <Box>
        <Icon
          as={RiLightbulbFlashFill}
          cursor="pointer"
          w={7}
          h={7}
          onClick={toggleModal}
          _hover={{ color: "green.500" }}
        />
      </Box>
      <Modal
        isOpen={modalShowing}
        onClose={toggleModal}
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
    </>
  );
}
