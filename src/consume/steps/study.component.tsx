import { useState } from "react";
import { Box, Divider, Heading, Icon } from "@chakra-ui/react";
import { AiOutlineExpand } from "react-icons/ai";

import { TStudyView } from "consume/redux/consume.types";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { selectCurrentHooks, selectPastHooks } from "hook/redux/hook.selectors";
import { toggleAllHooks } from "hook/redux/hook.slice";
import { nextStep } from "consume/redux/consume.slice";

import { HookList } from "../components/hook-list.component";
import { StudyHelp } from "../components/study-help.component";
import { StudyHooks } from "../components/study-hooks.component";
import { StudyMenu } from "../components/study-menu.component";
import { StudyTimer } from "consume/components/study-timer.component";

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
  const [view, setView] = useState<TStudyView>("timer");
  const currentHooks = useAppSelector(selectCurrentHooks);
  const pastHooks = useAppSelector(selectPastHooks);

  function goToMenu() {
    setView("menu");
  }

  return (
    <>
      {view === "timer" && <StudyTimer onNext={goToMenu} />}

      {view === "menu" && (
        <StudyMenu setView={setView} goToSummary={() => dispatch(nextStep())} />
      )}
      {view === "help" && <StudyHelp goBack={goToMenu} />}
      {view === "hooks" && (
        <StudyHooks goBack={goToMenu} messageText={hooksText} showIcons />
      )}
      {view === "notes" && (
        <StudyHooks goBack={goToMenu} messageText={notesText} />
      )}

      {!["timer", "help"].includes(view) && currentHooks.length > 0 && (
        <>
          <Divider />
          <Box mt={8}>
            <Heading textAlign="center" size="lg">
              Current Hooks
            </Heading>
            <HookList hooks={currentHooks} isPrevious={false} />
          </Box>
        </>
      )}

      {!["timer", "help"].includes(view) && pastHooks.length > 0 && (
        <>
          <Divider />
          <Box mt={8}>
            <Heading textAlign="center" size="lg">
              Past Hooks
            </Heading>
            <HookList hooks={pastHooks} isPrevious />
          </Box>
        </>
      )}
      {!["timer", "help"].includes(view) && (
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
