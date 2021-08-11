import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { useAppSelector } from "shared/redux/store";
import { selectPreviousHooks } from "hook/redux/hook.selectors";
import {
  selectStudyBlockCount,
  selectTotalStudyTime,
} from "consume/redux/consume.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { HookList } from "hook/components/hook-list.component";

export function ConsumeFinish() {
  const previousHooks = useAppSelector(selectPreviousHooks);
  const totalStudyTime = useAppSelector(selectTotalStudyTime);
  const studyBlockCount = useAppSelector(selectStudyBlockCount);

  return (
    <>
      <ConsumeWorkflowStep
        buttons={
          <CardButtonGrid
            buttons={[
              {
                text: "New Material",
                to: "/consume/1",
              },
              { text: "Go Home", to: "/" },
            ]}
          ></CardButtonGrid>
        }
        message={
          <>
            <Box>Here's a summary of your study session:</Box>
            <UnorderedList>
              <ListItem>You've created {previousHooks.length} hooks</ListItem>
              <ListItem>
                You've completed {studyBlockCount} study blocks and studied for
                about {totalStudyTime} minutes
              </ListItem>
            </UnorderedList>
          </>
        }
      ></ConsumeWorkflowStep>
      {previousHooks.length > 0 && (
        <HookList heading="All Hooks" hooks={previousHooks} />
      )}
    </>
  );
}
