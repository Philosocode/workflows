import { useSelector } from "react-redux";

import { selectCurrentStep } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ConsumeSettings } from "./consume-settings.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";

import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { BackIconLink } from "shared/components/button/back-icon-link.component";

export function ConsumeNavbar() {
  const currentStep = useSelector(selectCurrentStep);

  return (
    <AppNavbar
      leftSlot={
        <>
          <BackIconLink to="/" />
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
