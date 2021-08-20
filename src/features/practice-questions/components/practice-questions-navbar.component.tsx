import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { resetState } from "features/practice-questions/redux/practice-questions.slice";
import { selectCurrentStep } from "features/step/step.slice";

import { ResetWorkflowModal } from "shared/components/modal/components/reset-workflow-modal.component";
import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { GoBackModal } from "shared/components/modal/components/go-back-modal.component";

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
          <GoBackModal redirectUrl="/" />
          {currentStep > 1 && <ResetWorkflowModal onReset={handleReset} />}
        </>
      }
    />
  );
}
