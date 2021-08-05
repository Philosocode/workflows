import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/redux/store";
import { useCurrentStepParam } from "shared/hooks/use-current-step-param.hook";
import { selectConsumeStep } from "consume/redux/consume.selectors";
import { setStep } from "consume/redux/consume.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ConsumeSettings } from "./consume-settings.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";
import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function ConsumeNavbar() {
  const dispatch = useAppDispatch();
  const currentStep = useSelector(selectConsumeStep);

  useCurrentStepParam((step) => dispatch(setStep(step)));

  return (
    <AppNavbar
      leftSlot={
        <>
          <RandoHookModal />
          <GetUnstuckModal />
          {currentStep > 1 && <ConsumeResetModal />}
        </>
      }
      rightSlot={
        <>
          {currentStep > 1 && <ConsumeSettings />}
          <ToggleThemeButton />
          <StudyBlockCounter />
        </>
      }
    />
  );
}
