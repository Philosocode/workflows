import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";

export function DuckDebugFinish() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <>
      <DuckDebugWorkflowStep
        message="That's all the questions I got! Hope this helped!"
        editor={{ showEditor: false }}
        buttons={
          <CardButtonGrid
            buttons={[
              { text: "Exit", color: "green", to: redirectUrl },
              { text: "Restart", to: "duck-debug/1" },
            ]}
          />
        }
      />
    </>
  );
}
