import { AppNavbar } from "navbar/components/app-navbar.component";
import { GoBackModal } from "modal/components/go-back-modal.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";

export function PreStudyNavbar() {
  useSetRedirectUrl();

  return (
    <AppNavbar
      leftSlot={<GoBackModal redirectUrl="/" />}
      rightSlot={<ToggleThemeButton />}
    />
  );
}
