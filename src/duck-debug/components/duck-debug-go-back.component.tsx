import { Box, ButtonGroup } from "@chakra-ui/react";
import { IoMdReturnLeft } from "react-icons/io";
import { useHistory } from "react-router-dom";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { Button } from "shared/components/button/button.component";
import { IconButton } from "shared/components/icon-button.component";
import { ModalContent } from "modal/components/modal-content.component";
import { ModalWrapper } from "modal/components/modal-wrapper.component";

export function DuckDebugGoBack() {
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);
  const [modalShowing, toggleModal] = useToggle(false);

  function onExit() {
    history.push(redirectUrl);
  }

  return (
    <>
      <Box>
        <IconButton
          aria-label="Go Back"
          icon={<IoMdReturnLeft />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header="Exit Workflow"
          body="Are you sure you want to exit Duck Debug?"
          footer={
            <ButtonGroup spacing={5}>
              <Button onClick={onExit}>Yes</Button>
              <Button colorScheme="gray" onClick={toggleModal}>
                Cancel
              </Button>
            </ButtonGroup>
          }
        />
      </ModalWrapper>
    </>
  );
}
