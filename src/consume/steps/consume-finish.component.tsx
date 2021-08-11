import { useHistory } from "react-router-dom";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectPreviousHooks } from "hook/redux/hook.selectors";
import {
  selectMaterialType,
  selectStudyBlockCount,
  selectTotalStudyTime,
} from "consume/redux/consume.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "consume/components/consume-workflow-step.component";
import { HookList } from "hook/components/hook-list.component";
import { newMaterial } from "consume/redux/consume.slice";

export function ConsumeFinish() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const previousHooks = useAppSelector(selectPreviousHooks);
  const totalStudyTime = useAppSelector(selectTotalStudyTime);
  const studyBlockCount = useAppSelector(selectStudyBlockCount);
  const materialType = useAppSelector(selectMaterialType);

  const word = materialType === "reading" ? "read" : "watched";

  function reset(nextUrl: string) {
    dispatch(newMaterial());
    history.push(nextUrl);
  }

  return (
    <>
      <ConsumeWorkflowStep
        buttons={
          <CardButtonGrid
            buttons={[
              {
                text: "New Material",
                onClick: () => reset("/consume/1"),
              },
              { text: "Go Home", onClick: () => reset("/") },
            ]}
          ></CardButtonGrid>
        }
        message={
          <>
            <Box>Here's a summary of your study session:</Box>
            <UnorderedList>
              <ListItem>
                {previousHooks.length === 0
                  ? "You didn't create any hooks"
                  : `You've created ${previousHooks.length} hooks`}
              </ListItem>
              <ListItem>
                You've completed {studyBlockCount} study block(s)
              </ListItem>
              <ListItem>
                You've {word} for about {totalStudyTime} minutes
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
