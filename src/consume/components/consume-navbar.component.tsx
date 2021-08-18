import { useSelector } from "react-redux";

import { selectCurrentStep } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";

import { GoBackModal } from "modal/components/go-back-modal.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function ConsumeNavbar() {
  const currentStep = useSelector(selectCurrentStep);

  return (
    <AppNavbar
      leftSlot={
        <>
          <GoBackModal redirectUrl="/" />
          {currentStep > 1 && <ConsumeResetModal redirectUrl="/consume/1" />}
        </>
      }
      rightSlot={
        <>
          <ToggleThemeButton />
          <StudyBlockCounter />
        </>
      }
    />
  );
}
