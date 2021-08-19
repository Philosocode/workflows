import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingFinish() {
  return (
    <ProblemSolvingWorkflowStep
      message="The End. Hope you found this useful!"
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid
          buttons={[
            { text: "Exit", color: "green", to: "/get-unstuck" },
            { text: "Restart", to: "/problem-solving/1" },
          ]}
        />
      }
    />
  );
}
