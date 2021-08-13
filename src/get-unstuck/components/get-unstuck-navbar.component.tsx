import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { BackIconLink } from "shared/components/button/back-icon-link.component";

export function GetUnstuckNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <AppNavbar
      leftSlot={<BackIconLink to={redirectUrl} />}
      rightSlot={
        <>
          <ToggleThemeButton />
        </>
      }
    />
  );
}
