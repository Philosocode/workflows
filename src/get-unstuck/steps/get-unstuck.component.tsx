import { Box } from "@chakra-ui/react";

import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";

import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { quackers } from "avatar/data/quackers.avatar";
import { RandoCard } from "shared/components/card/rando-card.component";
import { getUnstuckPrompts } from "get-unstuck/shared/get-unstuck-prompts.data";

export function GetUnstuck() {
  useSetRedirectUrl();

  return (
    <WorkflowStep
      messageProps={{
        avatar: quackers,
      }}
      message={
        <Box>
          Hello, I'm Mr. Quackers. Are you stuck on a problem? If so, I want to
          help you solve it!
        </Box>
      }
    >
      <RandoCard
        ariaLabel="Get Unstuck"
        heading="Get Unstuck"
        values={getUnstuckPrompts}
      ></RandoCard>
    </WorkflowStep>
  );
}
