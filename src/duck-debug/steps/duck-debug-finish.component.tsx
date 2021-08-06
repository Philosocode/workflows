import { useHistory } from "react-router-dom";

import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.routes";
import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";

export function DuckDebugFinish() {
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <>
      <DuckDebugWorkflowStep
        message="That's all the questions I got! Hope this helped!"
        editor={{ showEditor: false }}
        buttons={
          <CardButtonGrid>
            <CardButton color="green" onClick={() => history.push(redirectUrl)}>Done</CardButton>
            <CardButton
              onClick={() => history.push(`${DUCK_DEBUG_BASE_PATH}/1`)}
              colorScheme="gray"
            >
              Restart
            </CardButton>
          </CardButtonGrid>
        }
      />
    </>
  );
}
