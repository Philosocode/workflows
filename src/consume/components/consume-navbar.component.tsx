import { useSelector } from "react-redux";
import { selectStep } from "consume/redux/consume.selectors";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ConsumeSettings } from "./consume-settings.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";
import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function ConsumeNavbar() {
  const step = useSelector(selectStep);

  return (
    <AppNavbar
      leftSlot={
        <>
          <RandoHookModal />
          <GetUnstuckModal />
          {step > 1 && <ConsumeResetModal />}
        </>
      }
      rightSlot={
        <>
          {step > 1 && <ConsumeSettings />}
          <ToggleThemeButton />
          <StudyBlockCounter />
        </>
      }
    />
  );
}
