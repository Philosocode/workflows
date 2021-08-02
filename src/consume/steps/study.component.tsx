import { useState } from "react";

import { TStudyView } from "consume/redux/consume.types";
import { useAppDispatch } from "shared/redux/store";
import { nextStep } from "consume/redux/consume.slice";

import { StudyHelp } from "../components/study-help.component";
import { StudyHooks } from "../components/study-hooks.component";
import { StudyMenu } from "../components/study-menu.component";
import { StudyTimer } from "consume/components/study-timer.component";
import { StudyFooter } from "consume/components/study-footer.component";
import { Box } from "@chakra-ui/react";

const notesText = (
  <>
    <Box>
      Create notes to summarize what what you've learned during this study
      block.
    </Box>
    <br />
    <Box>Try to do this from memory without referring to the material.</Box>
  </>
);

const hooksText = (
  <>
    <Box>Create hooks for abstract concepts and ideas.</Box>
    <br />
    <Box>Think about the concept deeply.</Box>
    <br />
    <Box>
      Keep creating hooks until you have a solid understanding of the concept.
    </Box>
  </>
);

export function Study() {
  const dispatch = useAppDispatch();
  const [view, setView] = useState<TStudyView>("timer");

  function goToMenu() {
    setView("menu");
  }

  const studyViewMap = {
    timer: <StudyTimer onNext={goToMenu} />,
    menu: (
      <StudyMenu setView={setView} goToSummary={() => dispatch(nextStep())} />
    ),
    help: <StudyHelp goBack={goToMenu} />,
    hooks: <StudyHooks goBack={goToMenu} messageText={hooksText} showIcons />,
    notes: <StudyHooks goBack={goToMenu} messageText={notesText} />,
  };

  return (
    <>
      {studyViewMap[view]}
      <StudyFooter view={view} />
    </>
  );
}
