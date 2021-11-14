import { ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { theme } from "shared/styles/theme";
import { useLocationStore } from "features/location/location.store";
import { useHookStore } from "features/hooks/logic/hook.store";
import { CONSUME_PAGE_NUMBERS } from "../routes/consume.routes";
import { useConsumeStore } from "../logic/consume.store";
import { selectMaterialWord } from "../logic/consume.selectors";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { StudyFooter } from "./study-footer.component";
import { CardButton } from "shared/components/button/card-button.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";

export function StudyMenu() {
  const history = useHistory();
  const location = useLocation();
  const word = useConsumeStore(selectMaterialWord);
  const { finishStudyBlock } = useConsumeStore();
  const { updateTotalHooksCompleted } = useHookStore();

  const { currentStep } = useLocationStore();
  const basePath = `/consume/${currentStep}`;
  const nextStep = currentStep + 1;

  function handleButtonClick() {
    updateTotalHooksCompleted();
    finishStudyBlock();
  }

  function handleNextBlock() {
    handleButtonClick();
    history.push(`/consume/${CONSUME_PAGE_NUMBERS.STUDY_START}`);
  }

  function handleDoneStudying() {
    handleButtonClick();
    history.push(`/consume/${nextStep}`);
  }

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

        <CardButton onClick={handleNextBlock} icon={FaArrowCircleRight}>
          Next Block
        </CardButton>

        <CardButton onClick={handleDoneStudying} icon={IoMdCheckmarkCircle}>
          I'm Done
        </CardButton>
      </CardButtonGrid>
      <StudyFooter />
    </ConsumeWorkflowStep>
  );
}
