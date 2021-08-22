import { useHistory } from "react-router-dom";

import { EXP_RATES } from "features/game/logic/game.constants";
import { useGameStore } from "features/game/logic/game.store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingFinish() {
  const history = useHistory();
  const { addExp } = useGameStore();

  function handleRedirect(nextUrl: string) {
    addExp(EXP_RATES.problemSolving);

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
