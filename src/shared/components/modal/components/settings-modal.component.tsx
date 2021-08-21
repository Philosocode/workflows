import {
  Box,
  Flex,
  FormLabel,
  Tooltip,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { SwitchGroup } from "shared/components/form/switch-group.component";
import { ResetAllDataModal } from "./reset-all-data-modal.component";
import { useSettingsStore } from "features/settings/settings.store";
import { Icon, QuestionOutlineIcon } from "@chakra-ui/icons";

interface IProps {
  isOpen: boolean;
  toggleModal: () => void;
  showIcon?: boolean;
}
export function SettingsModal(props: IProps) {
  const [resetModalShowing, toggleResetModal] = useToggle();
  const { colorMode, toggleColorMode } = useColorMode();
  const { showStopwatchTimerLabel, toggleShowStopwatchTimerLabel } =
    useSettingsStore();

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
                <SwitchGroup
                  id="show-stopwatch-label"
                  labelText={
                    <Flex alignItems="center">
                      Show Stopwatch Label
                      <Tooltip
                        hasArrow
                        label="The text that appears below the navbar stopwatch icon"
                      >
                        <QuestionOutlineIcon
                          ml={3}
                          boxSize={4}
                          cursor="pointer"
                        />
                      </Tooltip>
                    </Flex>
                  }
                  isChecked={showStopwatchTimerLabel}
                  onChange={toggleShowStopwatchTimerLabel}
                />
              </Box>
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
