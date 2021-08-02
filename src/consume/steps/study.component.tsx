import { useState } from "react";

import { TStudyView } from "consume/redux/consume.types";
import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { nextStep } from "consume/redux/consume.slice";

import { StudyHelp } from "../components/study-help.component";
import { StudyHooks } from "../components/study-hooks.component";
import { StudyMenu } from "../components/study-menu.component";
import { StudyFooter } from "consume/components/study-footer.component";
import { Box } from "@chakra-ui/react";
import { useNextPage } from "shared/hooks/use-next-page.hook";
import { selectStep } from "consume/redux/consume.selectors";

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
  const [view, setView] = useState<TStudyView>("menu");
  const step = useAppSelector(selectStep);

  const nextPage = useNextPage("/consume", step);

  function goToMenu() {
    setView("menu");
  }

  const studyViewMap = {
    menu: <StudyMenu setView={setView} goToSummary={nextPage} />,
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
