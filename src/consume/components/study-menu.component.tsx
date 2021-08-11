import { Icon, ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle, IoMdHelpCircle } from "react-icons/io";

import { theme } from "shared/styles/theme";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "step/step.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";
import { StudyFooter } from "./study-footer.component";

export function StudyMenu() {
  const location = useLocation();

  const currentStep = useAppSelector(selectCurrentStep);
  const basePath = `/consume/${currentStep}`;
  const nextStep = currentStep + 1;

  return (
    <ConsumeWorkflowStep
      showButton={false}
      message={
        <UnorderedList spacing={theme.spacing.messageBoxSpacing}>
          <ListItem>
            If you want to better understand an idea or concept, choose "Hooks"
          </ListItem>
          <ListItem>
            If you want to summarize and reinforce what you've learned, choose
            "Notes"
          </ListItem>
          <ListItem>If you're stuck on a problem, choose "I'm Stuck"</ListItem>
        </UnorderedList>
      }
    >
      <CardButtonGrid>
        <Tooltip
          label="Create hooks for abstract ideas or concepts"
          hasArrow
          shouldWrapChildren
          placement="top"
        >
          <Link to={`${basePath}/hooks`}>
            <CardButton icon={BiNetworkChart}>Hooks</CardButton>
          </Link>
        </Tooltip>
        <Tooltip
          label="Create notes to summarize info"
          hasArrow
          shouldWrapChildren
          placement="top"
        >
          <Link to={`${basePath}/notes`}>
            <CardButton icon={BiNote}>Notes</CardButton>
          </Link>
        </Tooltip>
        <Link
          to={{ pathname: "/duck-debug/1", state: { from: location.pathname } }}
        >
          <CardButton icon={AiOutlineExclamationCircle}>I'm Stuck</CardButton>
        </Link>
        <Link to={`/consume/${nextStep}`}>
          <CardButton icon={IoMdCheckmarkCircle}>I'm Done</CardButton>
        </Link>
      </CardButtonGrid>
      <StudyFooter showPrevious />
    </ConsumeWorkflowStep>
  );
}
