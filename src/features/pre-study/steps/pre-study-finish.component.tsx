import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";

import { PreStudyWorkflowStep } from "features/pre-study/components/pre-study-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { addExp } from "features/game/game.slice";
import { EXP_RATES } from "features/game/game.constants";

export function PreStudyFinish() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);

  function handleRedirect(nextUrl: string) {
    dispatch(addExp(EXP_RATES.preStudyRoutine));

    history.push(nextUrl);
  }

  return (
    <PreStudyWorkflowStep
      keyPressDisabled
      buttons={
        <CardButtonGrid
          buttons={[
            {
              text: "Exit",
              color: "green",
              onClick: () => handleRedirect(redirectUrl),
            },
            { text: "Restart", onClick: () => handleRedirect("/pre-study/1") },
          ]}
        />
      }
      message={
        <>
          <Box>That's all for now. Good luck with studying!</Box>
        </>
      }
    />
  );
}
