import { ButtonGroup } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "duck-debug/redux/duck-debug.selectors";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.route";

import { Button } from "shared/components/button/button.component";
import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";

export function DuckDebugFinish() {
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <>
      <DuckDebugWorkflowStep
        message="That's all the questions I got! Hope this helped!"
        editor={{ showEditor: false }}
        buttons={
          <ButtonGroup spacing={5}>
            <Button onClick={() => history.push(redirectUrl)}>Done</Button>
            <Button
              onClick={() => history.push(`${DUCK_DEBUG_BASE_PATH}/1`)}
              colorScheme="gray"
            >
              Restart
            </Button>
          </ButtonGroup>
        }
      />
    </>
  );
}
