import { useSelector } from "react-redux";
import { IoMdExit } from "react-icons/io";
import { BiReset } from "react-icons/bi";

import { selectCurrentStep } from "features/step/step.slice";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { ConsumeResetModal } from "./consume-reset-modal.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";
import { StudyBlockCounter } from "features/consume/components/study-block-counter.component";
import { INavMenuItem } from "shared/components/navbar/nav-menu.component";

export function ConsumeNavbar() {
  const currentStep = useSelector(selectCurrentStep);
  const [goBackOpen, toggleGoBack] = useToggle();
  const [resetOpen, toggleReset] = useToggle();

  const navItems: INavMenuItem[] = [
    { text: "Exit Workflow", icon: <IoMdExit />, onClick: toggleGoBack },
    {
      text: "Reset Workflow",
      icon: <BiReset />,
      show: currentStep > 1,
      onClick: toggleReset,
    },
  ];

  return (
    <>
      <AppNavbar leftSlot={navItems} rightSlot={<StudyBlockCounter />} />
      <GoBackModal
        isOpen={goBackOpen}
        handleClose={toggleGoBack}
        redirectUrl="/"
      />
      <ConsumeResetModal
        isOpen={resetOpen}
        handleClose={toggleReset}
        redirectUrl="/consume/1"
      />
    </>
  );
}
