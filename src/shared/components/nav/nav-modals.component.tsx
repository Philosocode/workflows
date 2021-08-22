import { StopwatchModal } from "features/timer/components/stopwatch-modal.component";
import { ExitWorkflowModal } from "../modal/components/exit-workflow-modal.component";
import { ResetWorkflowModal } from "../modal/components/reset-workflow-modal.component";
import { SettingsModal } from "../modal/components/settings-modal.component";
import { TModalName } from "./app-navbar.component";

interface IProps {
  modalState: Record<TModalName, boolean>;
  toggleModal: (modalName: TModalName) => void;
  exitUrl?: string;
  handleReset?: () => void;
}
export function NavModals(props: IProps) {
  return (
    <>
      {props.exitUrl && (
        <ExitWorkflowModal
          isOpen={props.modalState.exit}
          handleClose={() => props.toggleModal("exit")}
          redirectUrl={props.exitUrl}
        />
      )}

      {props.handleReset && (
        <ResetWorkflowModal
          isOpen={props.modalState.reset}
          handleClose={() => props.toggleModal("reset")}
          handleReset={props.handleReset}
        />
      )}

      <StopwatchModal
        isOpen={props.modalState.stopwatch}
        toggleModal={() => props.toggleModal("stopwatch")}
      />
      <SettingsModal
        isOpen={props.modalState.settings}
        toggleModal={() => props.toggleModal("settings")}
      />
    </>
  );
}
