import { ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";
import { StudyHelp } from "./study-help.component";
import { StudyNotes } from "./study-notes.component";

type TStudyView = "study" | "menu" | "hooks" | "notes" | "help";

export function Study() {
  const [view, setView] = useState<TStudyView>("study");

  return (
    <>
      {view === "study" && (
        <WorkflowStep messageContent="Study for a few minutes.">
          <Button color="green" onClick={() => setView("menu")}>
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

      {view === "help" && <StudyHelp goBack={() => setView("menu")} />}

      {view === "notes" && <StudyNotes goBack={() => setView("menu")} />}
    </>
  );
}
