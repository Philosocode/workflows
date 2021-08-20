import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";

export function ProblemSolvingNavbar() {
  return <AppNavbar leftSlot={<GoBackModal redirectUrl="/get-unstuck" />} />;
}
