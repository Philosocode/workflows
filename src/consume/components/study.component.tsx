import { useState } from "react";
import { Box, Divider, Heading, Icon } from "@chakra-ui/react";
import { AiOutlineExpand } from "react-icons/ai";

import { TStudyView } from "consume/logic/consume.types";
import { selectCurrentHooks, selectPastHooks } from "hook/logic/hook.selectors";

import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { HookList } from "./hook-list.component";
import { StudyHelp } from "./study-help.component";
import { StudyHooks } from "./study-hooks.component";
import { StudyMenu } from "./study-menu.component";
import { toggleAllHooks } from "hook/logic/hook.slice";
import { Timer } from "timer/components/timer.component";

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
  const dispatch = useAppDispatch();
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
          <Timer />
          <Button color="green" onClick={goToMenu} mt={8}>
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

      {!["study", "help"].includes(view) && currentHooks.length > 0 && (
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

      {!["study", "help"].includes(view) && pastHooks.length > 0 && (
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
      {!["study", "help"].includes(view) && (
        <Box
          bg="green.400"
          cursor="pointer"
          d="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          bottom={10}
          right={10}
          p={4}
          borderRadius="50%"
          shadow="xl"
          onClick={() => dispatch(toggleAllHooks())}
        >
          <Icon as={AiOutlineExpand} boxSize={7} color="white" />
        </Box>
      )}
    </>
  );
}
