import { IModalProps } from "../logic/modal.types";
import { useAppDispatch } from "shared/redux/store";
import { resetPractice } from "features/practice-questions/redux/practice-questions.slice";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useTimerStore } from "features/timer/logic/timer.store";
import { useGameStore } from "features/game/logic/game.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "./modal-content.component";
import { ModalWrapper } from "./modal-wrapper.component";
import { useConsumeStore } from "features/consume/logic/consume.store";

export function ResetAllDataModal(props: IModalProps) {
  const dispatch = useAppDispatch();

  const { reset: resetConsumeStore } = useConsumeStore();
  const { reset: resetHookStore } = useHookStore();
  const { reset: resetTimerStore } = useTimerStore();
  const { reset: resetGameStore } = useGameStore();

  function handleReset() {
    dispatch(resetPractice());

    resetConsumeStore();
    resetHookStore();
    resetTimerStore();
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
