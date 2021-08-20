import { Box, useColorMode } from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { IconButton } from "shared/components/button/icon-button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { SwitchGroup } from "shared/components/form/switch-group.component";

export function SettingsModal() {
  const [modalShowing, toggleModal] = useToggle();

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
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header="Settings"
          body={
            <>
              <Box>
                <SwitchGroup
                  id="toggle-dark-mode"
                  labelText="Dark Mode"
                  isChecked={colorMode === "dark"}
                  onChange={toggleColorMode}
                />
              </Box>
            </>
          }
        />
      </ModalWrapper>
    </>
  );
}
