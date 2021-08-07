import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function ProblemSolvingNavbar() {
  return <AppNavbar rightSlot={<ToggleThemeButton />} />;
}
