import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";
import { ToggleThemeButton } from "shared/components/navbar/toggle-theme-button.component";

export function DuckDebugNavbar() {
  return (
    <AppNavbar
      leftSlot={<GoBackModal redirectUrl="/get-unstuck" />}
      rightSlot={<ToggleThemeButton />}
    />
  );
}
