import { Box, FormLabel, useColorMode, VStack } from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { SwitchGroup } from "shared/components/form/switch-group.component";
import { ResetAllDataModal } from "./reset-all-data-modal.component";

interface IProps {
  isOpen: boolean;
  toggleModal: () => void;
  showIcon?: boolean;
}
export function SettingsModal(props: IProps) {
  const [resetModalShowing, toggleResetModal] = useToggle();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ModalWrapper isOpen={props.isOpen} handleClose={props.toggleModal}>
      <ModalContent
        header="Settings"
        body={
          <>
            <VStack spacing={{ base: 5, md: 7 }} alignItems="start">
              <SwitchGroup
                id="toggle-dark-mode"
                labelText="Dark Mode"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
              <Box>
                <FormLabel>Reset Data</FormLabel>
                <Button colorScheme="red" onClick={toggleResetModal}>
                  Reset
                </Button>
              </Box>
            </VStack>
          </>
        }
      />
      <ResetAllDataModal
        isOpen={resetModalShowing}
        handleClose={toggleResetModal}
      />
    </ModalWrapper>
  );
}
