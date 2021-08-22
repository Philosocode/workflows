import { IModalProps } from "../shared/modal.types";
import { useAppDispatch } from "shared/redux/store";
import { resetConsume } from "features/consume/redux/consume.slice";
import { resetPractice } from "features/practice-questions/redux/practice-questions.slice";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useTimerStore } from "features/timer/logic/timer.store";
import { useGameStore } from "features/game/logic/game.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "./modal-content.component";
import { ModalWrapper } from "./modal-wrapper.component";

export function ResetAllDataModal(props: IModalProps) {
  const dispatch = useAppDispatch();

  const { resetHookStore } = useHookStore();
  const { resetTimer } = useTimerStore();
  const { resetGameStore } = useGameStore();

  function handleReset() {
    dispatch(resetConsume());
    dispatch(resetPractice());

    resetHookStore();
    resetTimer();
    resetGameStore();

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
