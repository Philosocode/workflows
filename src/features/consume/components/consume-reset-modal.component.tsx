import { ButtonGroup } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import { resetConsume } from "features/consume/redux/consume.slice";
import { useHookStore } from "features/hooks/logic/hook.store";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { IModalProps } from "shared/components/modal/shared/modal.types";

interface IProps extends IModalProps {
  redirectUrl: string;
}
export function ConsumeResetModal(props: IProps) {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { resetHookStore } = useHookStore();

  function onReset() {
    dispatch(resetConsume());
    resetHookStore();
    props.handleClose();
    history.push(props.redirectUrl);
  }

  const footer = (
    <ButtonGroup spacing={5}>
      <Button colorScheme="red" onClick={onReset}>
        Reset
      </Button>
      <Button onClick={props.handleClose}>Cancel</Button>
    </ButtonGroup>
  );

  return (
    <ModalWrapper isOpen={props.isOpen} handleClose={props.handleClose}>
      <ModalContent
        header="Reset Workflow"
        body="This will restart the workflow and take you back to step 1. Are you sure you want to continue?"
        footer={footer}
      />
    </ModalWrapper>
  );
}
