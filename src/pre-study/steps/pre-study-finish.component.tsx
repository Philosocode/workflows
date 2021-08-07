import { Box } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectRedirectUrl } from "step/step.slice";

import { PreStudyWorkflowStep } from "pre-study/components/pre-study-workflow-step.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";

export function PreStudyFinish() {
  const redirectUrl = useAppSelector(selectRedirectUrl);

  return (
    <PreStudyWorkflowStep
      keyPressDisabled
      buttons={
        <CardButtonGrid
          buttons={[
            { text: "Exit", color: "green", to: redirectUrl },
            { text: "Restart", to: "/pre-study/1" },
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
