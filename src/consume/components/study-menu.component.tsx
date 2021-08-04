import { Icon, ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle, IoMdHelpCircle } from "react-icons/io";

import { TStudyView } from "consume/redux/consume.types";
import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.route";
import { theme } from "shared/styles/theme";
import { useNextStep } from "shared/hooks/use-next-step.hook";
import { useAppSelector } from "shared/redux/store";
import { selectConsumeStep } from "consume/redux/consume.selectors";

import { Message } from "message/components/message.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";

interface IProps {
  setView: (view: TStudyView) => void;
  goToSummary: () => void;
}
export function StudyMenu(props: IProps) {
  const location = useLocation();
  const history = useHistory();
  const currentStep = useAppSelector(selectConsumeStep);

  const nextStep = useNextStep("/consume", currentStep);
  const basePath = `/consume/${CONSUME_PAGE_NUMBERS.STUDY}`;

  return (
    <>
      <Message>
        <UnorderedList spacing={theme.spacing.messageBoxSpacing}>
          <ListItem>
            If you want to better understand an idea or concept, choose "Hooks".
          </ListItem>
          <ListItem>
            If you want to summarize and reinforce what you've learned, choose
            "Notes".
          </ListItem>
          <ListItem>
            If you're stuck on a problem, choose "I'm Stuck" or click on{" "}
            <Icon as={IoMdHelpCircle} /> in the top-left corner.
          </ListItem>
        </UnorderedList>
      </Message>

      <CardButtonGrid>
        <Tooltip
          label="Create hooks for abstract ideas or concepts"
          hasArrow
          shouldWrapChildren
          placement="top"
        >
          <CardButton
            color="gray"
            onClick={() => history.push(`${basePath}/hooks`)}
            icon={BiNetworkChart}
          >
            Hooks
          </CardButton>
        </Tooltip>
        <Tooltip
          label="Create notes to summarize info"
          hasArrow
          shouldWrapChildren
          placement="top"
        >
          <CardButton
            color="gray"
            onClick={() => history.push(`${basePath}/notes`)}
            icon={BiNote}
          >
            Notes
          </CardButton>
        </Tooltip>
        <CardButton
          color="gray"
          onClick={() =>
            history.push({
              pathname: `${DUCK_DEBUG_BASE_PATH}/1`,
              state: { from: location.pathname },
            })
          }
          icon={AiOutlineExclamationCircle}
        >
          I'm Stuck
        </CardButton>
        <CardButton color="gray" onClick={nextStep} icon={IoMdCheckmarkCircle}>
          I'm Done
        </CardButton>
      </CardButtonGrid>
    </>
  );
}
