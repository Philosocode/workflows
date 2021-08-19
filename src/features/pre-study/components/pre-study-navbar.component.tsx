import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";
import { ToggleThemeButton } from "shared/components/navbar/toggle-theme-button.component";

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
