import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { useSetRedirectUrl } from "shared/hooks/use-set-redirect-url.hook";

import { WorkflowStep } from "shared/components/step/workflow-step.component";
import { quackers } from "features/avatar/data/quackers.avatar";
import { RandoCard } from "shared/components/card/rando-card.component";
import { getUnstuckPrompts } from "features/get-unstuck/shared/get-unstuck-prompts.data";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { GiPlasticDuck } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

export function GetUnstuck() {
  useSetRedirectUrl();

  return (
    <WorkflowStep
      buttons={
        <CardButtonGrid
          buttons={[
            { text: "Duck Debug", to: "/duck-debug/1", icon: GiPlasticDuck },
            { text: "Problem Solve", to: "/problem-solving/1", icon: FaSearch },
          ]}
        />
      }
      messageProps={{
        avatar: quackers,
      }}
      message={
        <Box>
          Hello, I'm Mr. Quackers. I'm here to help you get unstuck and solve
          your problem!
          <UnorderedList>
            <ListItem>
              Try following the prompt in the box below. See if it helps.
            </ListItem>
            <ListItem>If you're still stuck, choose "Duck Debug".</ListItem>
            <ListItem>
              If you're working on a difficult problem, choose "Problem Solve".
            </ListItem>
          </UnorderedList>
        </Box>
      }
    >
      <RandoCard
        ariaLabel="Get Unstuck"
        heading="Get Unstuck"
        values={getUnstuckPrompts}
      />
    </WorkflowStep>
  );
}
