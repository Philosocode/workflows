import { AppNavbar } from "navbar/components/app-navbar.component";
import { StudyBlockCounter } from "consume/components/study-block-counter.component";
import { GetUnstuckModal } from "modal/components/get-unstuck-modal.component";
import { RandoHookModal } from "modal/components/rando-hook-modal.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function DuckDebugNavbar() {
  return (
    <AppNavbar
      leftSlot={
        <>
          <RandoHookModal />
          <GetUnstuckModal />
        </>
      }
      rightSlot={
        <>
          <ToggleThemeButton />
          <StudyBlockCounter />
        </>
      }
    />
  );
}
