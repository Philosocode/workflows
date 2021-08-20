import { useHistory } from "react-router-dom";

import { EXP_RATES } from "features/game/game.constants";
import { addExp } from "features/game/game.slice";
import { useAppDispatch } from "shared/redux/store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingFinish() {
  const history = useHistory();
  const dispatch = useAppDispatch();

  function handleRedirect(nextUrl: string) {
    dispatch(addExp(EXP_RATES.problemSolving));

    history.push(nextUrl);
  }

  return (
    <ProblemSolvingWorkflowStep
      message="The End. Hope you found this useful!"
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid
          buttons={[
            {
              text: "Exit",
              color: "green",
              onClick: () => handleRedirect("/get-unstuck"),
            },
            {
              text: "Restart",
              onClick: () => handleRedirect("/problem-solving/1"),
            },
          ]}
        />
      }
    />
  );
}
