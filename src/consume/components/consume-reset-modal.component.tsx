import { Box, ButtonGroup } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppDispatch } from "shared/redux/store";

import { Button } from "shared/components/button/button.component";
import { IconButton } from "shared/components/icon-button.component";
import { ModalContent } from "modal/components/modal-content.component";
import { ModalWrapper } from "modal/components/modal-wrapper.component";
import { newMaterial } from "consume/redux/consume.slice";

export function ConsumeResetModal() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [modalShowing, toggleModal] = useToggle(false);

  function onReset() {
    dispatch(newMaterial());
    history.push("/consume/1");
    toggleModal();
  }

  const footer = (
    <ButtonGroup spacing={5}>
      <Button colorScheme="red" onClick={onReset}>
        Reset
      </Button>
      <Button colorScheme="gray" onClick={toggleModal}>
        Cancel
      </Button>
    </ButtonGroup>
  );

  return (
    <>
      <Box>
        <IconButton
          aria-label="Reset Workflow"
          icon={<BiReset />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header="Reset Workflow"
          body="This will reset your progress. Are you sure you want to continue?"
          footer={footer}
        />
      </ModalWrapper>
    </>
  );
}
