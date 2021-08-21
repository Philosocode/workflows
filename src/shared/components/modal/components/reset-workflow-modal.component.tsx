import { Box, ButtonGroup } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button/button.component";
import { IconButton } from "shared/components/button/icon-button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { IModalProps } from "../shared/modal.types";

interface IProps extends IModalProps {
  onReset: () => void;
}
export function ResetWorkflowModal(props: IProps) {
  const [modalShowing, toggleModal] = useToggle(false);

  function onReset() {
    props.onReset();
    toggleModal();
  }

  const footer = (
    <ButtonGroup spacing={5}>
      <Button colorScheme="red" onClick={onReset}>
        Reset
      </Button>
      <Button onClick={toggleModal}>Cancel</Button>
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
      <ModalWrapper isOpen={modalShowing} handleClose={toggleModal}>
        <ModalContent
          header="Reset Workflow"
          body="This will reset your progress and restart the workflow. Are you sure you want to continue?"
          footer={footer}
        />
      </ModalWrapper>
    </>
  );
}
