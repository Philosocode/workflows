import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "features/step/step.slice";

import { PreStudyWorkflowStep } from "features/pre-study/components/pre-study-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { EXP_RATES } from "features/game/logic/game.constants";
import { useGameStore } from "features/game/logic/game.store";

export function PreStudyFinish() {
  const history = useHistory();
  const redirectUrl = useAppSelector(selectRedirectUrl);
  const { addExp } = useGameStore();

  function handleRedirect(nextUrl: string) {
    addExp(EXP_RATES.preStudyRoutine);
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
      message={<Box>That's all for now. Good luck with studying!</Box>}
    />
  );
}
