import { Box, Button, FormLabel, useColorMode, VStack } from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { IconButton } from "shared/components/button/icon-button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { SwitchGroup } from "shared/components/form/switch-group.component";
import { ResetAllDataModal } from "./reset-all-data-modal.component";

export function SettingsModal() {
  const [modalShowing, toggleModal] = useToggle();
  const [resetModalShowing, toggleResetModal] = useToggle();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <IconButton
          aria-label="Settings"
          icon={<FaCog />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} handleClose={toggleModal}>
        <ModalContent
          header="Settings"
          body={
            <>
              <VStack spacing={{ base: 5, md: 7 }} alignItems="start">
                <Box>
                  <FormLabel>Reset Data</FormLabel>
                  <Button colorScheme="red" onClick={toggleResetModal}>
                    Reset
                  </Button>
                </Box>

                <SwitchGroup
                  id="toggle-dark-mode"
                  labelText="Dark Mode"
                  isChecked={colorMode === "dark"}
                  onChange={toggleColorMode}
                />
              </VStack>
            </>
          }
        />
        <ResetAllDataModal
          isOpen={resetModalShowing}
          handleClose={toggleResetModal}
        />
      </ModalWrapper>
    </>
  );
}
