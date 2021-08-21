import { ButtonGroup } from "@chakra-ui/react";

import { IModalProps } from "../shared/modal.types";
import { useAppDispatch } from "shared/redux/store";
import { resetConsume } from "features/consume/redux/consume.slice";
import { resetGame } from "features/game/game.slice";
import { resetPractice } from "features/practice-questions/redux/practice-questions.slice";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useTimerStore } from "features/timer/timer.store";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "./modal-content.component";
import { ModalWrapper } from "./modal-wrapper.component";
import { Buttons } from "shared/components/button/buttons.component";

export function ResetAllDataModal(props: IModalProps) {
  const dispatch = useAppDispatch();

  const { resetHookStore } = useHookStore();
  const { resetTimer } = useTimerStore();

  function handleReset() {
    dispatch(resetConsume());
    dispatch(resetGame());
    dispatch(resetPractice());

    resetHookStore();
    resetTimer();

    props.handleClose();
  }

  return (
    <ModalWrapper isOpen={props.isOpen} handleClose={props.handleClose}>
      <ModalContent
        header="Reset Data"
        body="This will delete all your data (level, EXP, notes, etc). Are you sure you want to do this?"
        footer={
          <Buttons>
            <Button colorScheme="red" onClick={() => handleReset()}>
              Reset
            </Button>
            <Button onClick={props.handleClose}>Cancel</Button>
          </Buttons>
        }
      />
    </ModalWrapper>
  );
}
