import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { resetState } from "features/practice-questions/redux/practice-questions.slice";
import { selectCurrentStep } from "features/step/step.slice";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { ResetWorkflowModal } from "shared/components/modal/components/reset-workflow-modal.component";
import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";
import { INavMenuItem } from "shared/components/navbar/nav-menu.component";
import { BiReset } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";

export function PracticeQuestionsNavbar() {
  const [goBackOpen, toggleGoBack] = useToggle();
  const [resetOpen, toggleReset] = useToggle();

  const dispatch = useAppDispatch();
  const history = useHistory();
  const currentStep = useAppSelector(selectCurrentStep);

  const menuItems: INavMenuItem[] = [
    {
      text: "Exit Workflow",
      icon: <IoMdExit />,
      onClick: toggleGoBack,
    },
    {
      text: "Reset Workflow",
      icon: <BiReset />,
      onClick: toggleReset,
      show: currentStep > 1,
    },
  ];

  function handleReset() {
    dispatch(resetState());
    history.push("/practice-questions/1");
  }

  return (
    <>
      <AppNavbar leftSlot={menuItems} />
      <GoBackModal
        isOpen={goBackOpen}
        handleClose={toggleGoBack}
        redirectUrl="/"
      />
      <ResetWorkflowModal
        isOpen={resetOpen}
        handleClose={toggleReset}
        onReset={handleReset}
      />
    </>
  );
}
