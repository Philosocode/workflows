import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { GoBackModal } from "modal/components/go-back-modal.component";

export function DuckDebugNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <AppNavbar
      leftSlot={
        <>
          <GoBackModal
            redirectUrl={redirectUrl}
            text="Are you sure you want to exit Duck Debug?"
          />
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
