import { BiReset } from "react-icons/bi";

import { INavMenuItem } from "shared/components/navbar/nav-menu.component";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";

export function DuckDebugNavbar() {
  const [modalOpen, toggleModal] = useToggle();
  const menuItems: INavMenuItem[] = [
    { text: "Exit Workflow", icon: <BiReset />, onClick: toggleModal },
  ];

  return (
    <>
      <AppNavbar leftSlot={menuItems} />
      <GoBackModal
        isOpen={modalOpen}
        handleClose={toggleModal}
        redirectUrl="/get-unstuck"
      />
    </>
  );
}
