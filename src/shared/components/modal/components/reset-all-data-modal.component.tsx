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
import { useNoteStore } from "features/notes/logic/note.store";

export function ResetAllDataModal(props: IModalProps) {
  const { reset: resetConsume } = useConsumeStore();
  const { reset: resetGame } = useGameStore();
  const { reset: resetHook } = useHookStore();
  const { reset: resetNote } = useNoteStore();
  const { reset: resetPractice } = usePracticeStore();
  const { reset: resetTimer } = useTimerStore();

  function handleReset() {
    resetConsume();
    resetGame();
    resetNote();
    resetHook();
    resetPractice();
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
