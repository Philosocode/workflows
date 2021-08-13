import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { resetState } from "practice-questions/redux/practice-questions.slice";
import { selectCurrentStep } from "step/step.slice";

import { ResetWorkflowModal } from "modal/components/reset-workflow-modal.component";
import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";
import { BackIconLink } from "shared/components/button/back-icon-link.component";

export function PracticeQuestionsNavbar() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const currentStep = useAppSelector(selectCurrentStep);

  function handleReset() {
    dispatch(resetState());
    history.push("/practice-questions/1");
  }

  return (
    <AppNavbar
      leftSlot={
        <>
          <BackIconLink to="/" />
          {currentStep > 1 && <ResetWorkflowModal onReset={handleReset} />}
        </>
      }
      rightSlot={<ToggleThemeButton />}
    />
  );
}
