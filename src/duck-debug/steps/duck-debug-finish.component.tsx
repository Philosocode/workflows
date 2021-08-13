import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";

export function DuckDebugFinish() {
  return (
    <>
      <DuckDebugWorkflowStep
        message="That's all the questions I got! Hope this helped!"
        editor={{ showEditor: false }}
        buttons={
          <CardButtonGrid
            buttons={[
              { text: "Exit", color: "green", to: "/get-unstuck" },
              { text: "Restart", to: "duck-debug/1" },
            ]}
          />
        }
      />
    </>
  );
}
