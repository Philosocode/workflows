import { useHistory } from "react-router-dom";

import { EXP_RATES } from "features/game/game.constants";
import { addExp } from "features/game/game.slice";
import { useAppDispatch } from "shared/redux/store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { DuckDebugWorkflowStep } from "features/duck-debug/components/duck-debug-workflow-step.component";

export function DuckDebugFinish() {
  const history = useHistory();
  const dispatch = useAppDispatch();

  function handleRedirect(nextUrl: string) {
    dispatch(addExp(EXP_RATES.duckDebug));

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
