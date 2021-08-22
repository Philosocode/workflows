import { ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { theme } from "shared/styles/theme";
import { useAppSelector } from "shared/redux/store";
import { selectMaterialType } from "features/consume/redux/consume.selectors";
import { useLocationStore } from "features/location/location.store";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { StudyFooter } from "./study-footer.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";

export function StudyMenu() {
  const location = useLocation();
  const materialType = useAppSelector(selectMaterialType);
  const word = materialType === "reading" ? "read" : "watch";

  const { currentStep } = useLocationStore();
  const basePath = `/consume/${currentStep}`;
  const nextStep = currentStep + 1;

  return (
    <ConsumeWorkflowStep
      showButton={false}
      message={
        <UnorderedList spacing={theme.spacing.messageBoxSpacing}>
          <ListItem>
            If you want to summarize what you've learned, choose "Notes"
          </ListItem>
          <ListItem>
            If you want to better understand an idea or concept, choose "Hooks"
          </ListItem>
          <ListItem>If you're stuck on a problem, choose "I'm Stuck"</ListItem>
          <ListItem>
            If you want to start {word}ing again or finish studying, choose
            "Next Step"
          </ListItem>
        </UnorderedList>
      }
    >
      <CardButtonGrid>
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

        <Tooltip
          label="Use hooks for abstract ideas or concepts"
          hasArrow
          shouldWrapChildren
          placement="top"
        >
          <Link to={`${basePath}/hooks`}>
            <CardButton icon={BiNetworkChart}>Hooks</CardButton>
          </Link>
        </Tooltip>

        <Link
          to={{ pathname: "/get-unstuck", state: { from: location.pathname } }}
        >
          <CardButton icon={AiOutlineExclamationCircle}>I'm Stuck</CardButton>
        </Link>

        <Link to={`/consume/${nextStep}`}>
          <CardButton icon={IoMdCheckmarkCircle}>Next Step</CardButton>
        </Link>
      </CardButtonGrid>
      <StudyFooter />
    </ConsumeWorkflowStep>
  );
}
