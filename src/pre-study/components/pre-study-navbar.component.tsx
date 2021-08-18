import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { AppNavbar } from "navbar/components/app-navbar.component";
import { GoBackModal } from "modal/components/go-back-modal.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function PreStudyNavbar() {
  const redirectUrl = useAppSelector(selectRedirectUrl);
  useSetRedirectUrl();

  return (
    <AppNavbar
      leftSlot={<GoBackModal redirectUrl={redirectUrl} />}
      rightSlot={<ToggleThemeButton />}
    />
  );
}
