import { Icon, ListItem, Tooltip, UnorderedList } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle, IoMdHelpCircle } from "react-icons/io";

import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.routes";
import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { theme } from "shared/styles/theme";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Message } from "message/components/message.component";

export function StudyMenu() {
  const location = useLocation();
  const history = useHistory();

  const currentStep = CONSUME_PAGE_NUMBERS.STUDY;
  const basePath = `/consume/${currentStep}`;
  const nextStep = currentStep + 1;

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
            onClick={() => history.push(`${basePath}/notes`)}
            icon={BiNote}
          >
            Notes
          </CardButton>
        </Tooltip>
        <CardButton
          onClick={() =>
            history.push({
              pathname: `${DUCK_DEBUG_BASE_PATH}/setup`,
              state: { from: location.pathname },
            })
          }
          icon={AiOutlineExclamationCircle}
        >
          I'm Stuck
        </CardButton>
        <CardButton
          onClick={() => history.push(`/consume/${nextStep}`)}
          icon={IoMdCheckmarkCircle}
        >
          I'm Done
        </CardButton>
      </CardButtonGrid>
    </>
  );
}
