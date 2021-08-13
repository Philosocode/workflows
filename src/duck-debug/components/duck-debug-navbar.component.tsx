import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { GoBackModal } from "modal/components/go-back-modal.component";

export function DuckDebugNavbar() {
  return (
    <AppNavbar
      leftSlot={
        <>
          <GoBackModal
            redirectUrl="/get-unstuck"
            text="Are you sure you want to exit Duck Debug?"
          />
        </>
      }
      rightSlot={<ToggleThemeButton />}
    />
  );
}
