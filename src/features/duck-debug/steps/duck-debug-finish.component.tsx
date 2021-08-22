import { useHistory } from "react-router-dom";

import { EXP_RATES } from "features/game/logic/game.constants";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { DuckDebugWorkflowStep } from "features/duck-debug/components/duck-debug-workflow-step.component";
import { useGameStore } from "features/game/logic/game.store";

export function DuckDebugFinish() {
  const history = useHistory();
  const { addExp } = useGameStore();

  function handleRedirect(nextUrl: string) {
    addExp(EXP_RATES.duckDebug);

    history.push(nextUrl);
  }

  return (
    <>
      <DuckDebugWorkflowStep
        message="That's all the questions I got! Hope this helped!"
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
                onClick: () => handleRedirect("duck-debug/1"),
              },
            ]}
          />
        }
      />
    </>
  );
}
