import { Box, ButtonGroup } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppDispatch } from "shared/redux/store";
import { resetConsume } from "features/consume/redux/consume.slice";
import { useHookStore } from "features/hooks/logic/hook.store";

import { Button } from "shared/components/button/button.component";
import { IconButton } from "shared/components/button/icon-button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";

interface IProps {
  redirectUrl: string;
}
export function ConsumeResetModal(props: IProps) {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [modalShowing, toggleModal] = useToggle(false);
  const { resetHookStore } = useHookStore();

  function onReset() {
    dispatch(resetConsume());
    resetHookStore();
    toggleModal();
    history.push(props.redirectUrl);
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
      <ModalWrapper isOpen={modalShowing} handleClose={toggleModal}>
        <ModalContent
          header="Reset Workflow"
          body="This will restart the workflow and take you back to step 1. Are you sure you want to continue?"
          footer={footer}
        />
      </ModalWrapper>
    </>
  );
}
