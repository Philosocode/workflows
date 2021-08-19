import { useSelector } from "react-redux";

import { selectCurrentStep } from "features/step/step.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";

import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";
import { StudyBlockCounter } from "features/consume/components/study-block-counter.component";
import { ToggleThemeButton } from "shared/components/navbar/toggle-theme-button.component";

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
