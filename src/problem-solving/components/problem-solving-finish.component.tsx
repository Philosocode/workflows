import { selectRedirectUrl } from "step/step.slice";
import { useAppSelector } from "shared/redux/store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ProblemSolvingWorkflowStep } from "./problem-solving-workflow-step.component";

export function ProblemSolvingFinish() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <ProblemSolvingWorkflowStep
      message="The End. Hope you found this useful!"
      editor={{ showEditor: false }}
      buttons={
        <CardButtonGrid
          buttons={[
            { text: "Exit", color: "green", to: redirectUrl },
            { text: "Restart", to: "/problem-solving/1" },
          ]}
        />
      }
    />
  );
}
