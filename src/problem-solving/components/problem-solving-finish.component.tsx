import { Link } from "react-router-dom";

import { selectRedirectUrl } from "step/step.slice";
import { useAppSelector } from "shared/redux/store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingFinish() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <ProblemSolvingWorkflowStep
      message="The End. Hope you found this useful!"
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid>
          <Link to={redirectUrl}>
            <CardButton color="green">Exit</CardButton>
          </Link>
          <Link to="/problem-solving/1">
            <CardButton>Restart</CardButton>
          </Link>
        </CardButtonGrid>
      }
    />
  );
}
