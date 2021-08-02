import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { TStudyView } from "consume/redux/consume.types";
import { Message } from "message/components/message.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Tooltip } from "@chakra-ui/react";

interface IProps {
  setView: (view: TStudyView) => void;
  goToSummary: () => void;
}
export function StudyMenu(props: IProps) {
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
            onClick={() => props.setView("hooks")}
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
            onClick={() => props.setView("notes")}
            icon={BiNote}
          >
            Notes
          </CardButton>
        </Tooltip>
        <CardButton
          color="gray"
          onClick={() => props.setView("help")}
          icon={AiOutlineExclamationCircle}
        >
          I'm Stuck
        </CardButton>
        <CardButton
          color="gray"
          onClick={props.goToSummary}
          icon={IoMdCheckmarkCircle}
        >
          I'm Done
        </CardButton>
      </CardButtonGrid>
    </>
  );
}
