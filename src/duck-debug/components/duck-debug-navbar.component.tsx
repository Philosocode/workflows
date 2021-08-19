import { AppNavbar } from "navbar/components/app-navbar.component";
import { GoBackModal } from "modal/components/go-back-modal.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function DuckDebugNavbar() {
  return (
    <AppNavbar
      leftSlot={<GoBackModal redirectUrl="/get-unstuck" />}
      rightSlot={<ToggleThemeButton />}
    />
  );
}
