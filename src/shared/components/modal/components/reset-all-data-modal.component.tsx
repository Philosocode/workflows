import { IModalProps } from "../logic/modal.types";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useTimerStore } from "features/timer/logic/timer.store";
import { useGameStore } from "features/game/logic/game.store";
import { useConsumeStore } from "features/consume/logic/consume.store";
import { usePracticeStore } from "features/practice/logic/practice.store";

import { Button } from "shared/components/button/button.component";
import { Buttons } from "shared/components/button/buttons.component";
import { ModalContent } from "./modal-content.component";
import { ModalWrapper } from "./modal-wrapper.component";

export function ResetAllDataModal(props: IModalProps) {
  const { reset: resetConsumeStore } = useConsumeStore();
  const { reset: resetGameStore } = useGameStore();
  const { reset: resetHookStore } = useHookStore();
  const { reset: resetPracticeStore } = usePracticeStore();
  const { reset: resetTimerStore } = useTimerStore();

  function handleReset() {
    resetConsumeStore();
    resetGameStore();
    resetHookStore();
    resetPracticeStore();
    resetTimerStore();

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
