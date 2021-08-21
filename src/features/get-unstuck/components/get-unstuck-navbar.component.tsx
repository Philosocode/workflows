import { BiReset } from "react-icons/bi";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { INavMenuItem } from "shared/components/navbar/nav-menu.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";

export function GetUnstuckNavbar() {
  const [modalOpen, toggleModal] = useToggle();
  const redirectUrl = useAppSelector(selectRedirectUrl);

  const menuItems: INavMenuItem[] = [
    { text: "Exit Workflow", icon: <BiReset />, onClick: toggleModal },
  ];

  return (
    <>
      <AppNavbar leftSlot={menuItems} />
      <GoBackModal
        isOpen={modalOpen}
        handleClose={toggleModal}
        redirectUrl={redirectUrl}
      />
    </>
  );
}
