import { useHistory } from "react-router-dom";

import { selectRedirectUrl } from "step/step.slice";
import { useAppSelector } from "shared/redux/store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingFinish() {
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <ProblemSolvingWorkflowStep
      message="The End. Hope you found this useful!"
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid>
          <CardButton color="green" onClick={() => history.push(redirectUrl)}>
            Exit
          </CardButton>
          <CardButton onClick={() => history.push("/problem-solving/1")}>
            Restart
          </CardButton>
        </CardButtonGrid>
      }
    />
  );
}
