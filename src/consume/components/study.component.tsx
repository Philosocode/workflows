import { ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { StudyHelp } from "./study-help.component";
import { StudyHooks } from "./study-hooks.component";

type TStudyView = "study" | "menu" | "hooks" | "notes" | "help";

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

      {view === "menu" && (
        <WorkflowStep messageContent="Choose an option:">
          <ButtonGroup>
            <Button color="green" onClick={() => setView("hooks")}>
              Hooks
            </Button>
            <Button color="green" onClick={() => setView("notes")}>
              Notes
            </Button>
            <Button color="green" onClick={() => setView("help")}>
              I'm Stuck
            </Button>
          </ButtonGroup>
        </WorkflowStep>
      )}

      {view === "help" && <StudyHelp goBack={goToMenu} />}
      {view === "hooks" && (
        <StudyHooks goBack={goToMenu} messageText={hooksText} showIcons />
      )}
      {view === "notes" && (
        <StudyHooks goBack={goToMenu} messageText={notesText} />
      )}
    </>
  );
}
