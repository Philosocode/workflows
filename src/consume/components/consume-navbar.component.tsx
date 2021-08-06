import { useSelector } from "react-redux";

import { selectCurrentStep } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ConsumeSettings } from "./consume-settings.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";
import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function ConsumeNavbar() {
  const currentStep = useSelector(selectCurrentStep);

  return (
    <AppNavbar
      leftSlot={
        <>
          <GetUnstuckModal />
          {currentStep > 1 && <ConsumeResetModal redirectUrl="/consume/1" />}
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
