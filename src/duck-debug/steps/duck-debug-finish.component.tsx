import { Link } from "react-router-dom";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";

export function DuckDebugFinish() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <>
      <DuckDebugWorkflowStep
        message="That's all the questions I got! Hope this helped!"
        editor={{ showEditor: false }}
        buttons={
          <CardButtonGrid>
            <Link to={redirectUrl}>
              <CardButton color="green">Exit</CardButton>
            </Link>
            <Link to={"duck-debug/1"}>
              <CardButton colorScheme="gray">Restart</CardButton>
            </Link>
          </CardButtonGrid>
        }
      />
    </>
  );
}
