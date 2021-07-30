import { useState } from "react";

import { Box, Divider, Heading } from "@chakra-ui/react";
import { TStudyView } from "consume/logic/consume.types";
import { selectCurrentHooks, selectPastHooks } from "hook/logic/hook.selectors";

import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { useAppSelector } from "shared/redux/store";
import { HookList } from "./hook-list.component";
import { StudyHelp } from "./study-help.component";
import { StudyHooks } from "./study-hooks.component";
import { StudyMenu } from "./study-menu.component";

const notesText = (
  <>
    <p>Summarize what you learned during this study block.</p>
    <p>Try to do this from memory without referring to the material.</p>
  </>
);

const hooksText = (
  <>
    <p>Create hooks for abstract concepts and ideas.</p>
    <p>Think about the concept deeply.</p>
    <p>
      Keep creating hooks until you have a solid understanding of the concept.
    </p>
  </>
);

export function Study() {
  const [view, setView] = useState<TStudyView>("study");
  const currentHooks = useAppSelector(selectCurrentHooks);
  const pastHooks = useAppSelector(selectPastHooks);

  function goToMenu() {
    setView("menu");
  }

  return (
    <>
      {view === "study" && (
        <WorkflowStep messageContent="Study for a few minutes.">
          <Button color="green" onClick={goToMenu}>
            Next
          </Button>
        </WorkflowStep>
      )}

      {view === "menu" && <StudyMenu setView={setView} />}
      {view === "help" && <StudyHelp goBack={goToMenu} />}
      {view === "hooks" && (
        <StudyHooks goBack={goToMenu} messageText={hooksText} showIcons />
      )}
      {view === "notes" && (
        <StudyHooks goBack={goToMenu} messageText={notesText} />
      )}

      {view !== "help" && currentHooks.length > 0 && (
        <>
          <Divider />
          <Box mt={8}>
            <Heading textAlign="center" size="lg">
              Current Hooks
            </Heading>
            <HookList hooks={currentHooks} />
          </Box>
        </>
      )}

      {view !== "help" && pastHooks.length > 0 && (
        <>
          <Divider />
          <Box mt={8}>
            <Heading textAlign="center" size="lg">
              Past Hooks
            </Heading>
            <HookList hooks={pastHooks} />
          </Box>
        </>
      )}
    </>
  );
}
