import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { BackIconLink } from "shared/components/button/back-icon-link.component";

export function ProblemSolvingNavbar() {
  return (
    <AppNavbar
      leftSlot={<BackIconLink to="/get-unstuck" />}
      rightSlot={<ToggleThemeButton />}
    />
  );
}
