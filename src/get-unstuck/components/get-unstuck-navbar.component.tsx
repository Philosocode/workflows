import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { GoBackModal } from "modal/components/go-back-modal.component";

export function GetUnstuckNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <AppNavbar
      leftSlot={
        <>
          <GoBackModal
            redirectUrl={redirectUrl}
            text="Do you want to exit this workflow?"
          />
        </>
      }
      rightSlot={
        <>
          <ToggleThemeButton />
        </>
      }
    />
  );
}
