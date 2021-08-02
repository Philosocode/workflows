import { Tooltip } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { useAppSelector } from "shared/redux/store";
import { TStudyView } from "consume/redux/consume.types";
import { CONSUME_PAGE_NUMBERS } from "consume/routes/consume.routes";
import { selectStep } from "consume/redux/consume.selectors";

import { Message } from "message/components/message.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";

interface IProps {
  setView: (view: TStudyView) => void;
  goToSummary: () => void;
}
export function StudyMenu(props: IProps) {
  const history = useHistory();
  const basePath = `/consume/${CONSUME_PAGE_NUMBERS.STUDY}`;
  const step = useAppSelector(selectStep);

  return (
    <>
      <Message>Choose an option:</Message>
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
          onClick={() => history.push(`${basePath}/help`)}
          icon={AiOutlineExclamationCircle}
        >
          I'm Stuck
        </CardButton>
        <CardButton
          color="gray"
          onClick={() => history.push(`/consume/${step + 1}`)}
          icon={IoMdCheckmarkCircle}
        >
          I'm Done
        </CardButton>
      </CardButtonGrid>
    </>
  );
}
