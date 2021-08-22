import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { EXP_RATES } from "features/game/logic/game.constants";
import { useLocationStore } from "features/location/location.store";
import { useGameStore } from "features/game/logic/game.store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { PreStudyWorkflowStep } from "features/pre-study/components/pre-study-workflow-step.component";

export function PreStudyFinish() {
  const history = useHistory();
  const { redirectUrl } = useLocationStore();
  const { addExp } = useGameStore();

  return (
    <PreStudyWorkflowStep
      keyPressDisabled
      buttons={
        <CardButtonGrid
          buttons={[
            {
              text: "Exit",
              color: "green",
              onClick: () => {
                addExp(EXP_RATES.preStudyRoutine);
                history.push(redirectUrl);
              },
            },
            { text: "Restart", onClick: () => history.push("/pre-study/1") },
          ]}
        />
      }
      message={<Box>That's all for now. Good luck with studying!</Box>}
    />
  );
}
