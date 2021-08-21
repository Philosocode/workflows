import { IoMdExit } from "react-icons/io";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";

export function ProblemSolvingNavbar() {
  const [goBackOpen, toggleGoBack] = useToggle();

  return (
    <>
      <AppNavbar
        leftSlot={[
          { text: "Exit Workflow", icon: <IoMdExit />, onClick: toggleGoBack },
        ]}
      />
      <GoBackModal
        isOpen={goBackOpen}
        handleClose={toggleGoBack}
        redirectUrl={"/get-unstuck"}
      />
    </>
  );
}
