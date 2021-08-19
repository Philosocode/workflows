import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { ToggleThemeButton } from "shared/components/navbar/toggle-theme-button.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";

export function GetUnstuckNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <AppNavbar
      leftSlot={<GoBackModal redirectUrl={redirectUrl} />}
      rightSlot={
        <>
          <ToggleThemeButton />
        </>
      }
    />
  );
}
