import { Icon, IconProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiNetworkChart, BiNote } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { TStudyView } from "consume/redux/consume.types";
import { Message } from "message/components/message.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";

interface CardIconProps extends IconProps {
  icon: IconType;
}
function CardIcon(props: CardIconProps) {
  return <Icon as={props.icon} mr={2} {...props} />;
}

interface IProps {
  setView: (view: TStudyView) => void;
  goToSummary: () => void;
}
export function StudyMenu(props: IProps) {
  return (
    <>
      <Message>Choose an option:</Message>
      <CardButtonGrid>
        <CardButton color="gray" onClick={() => props.setView("hooks")}>
          <CardIcon icon={BiNetworkChart} /> Hooks
        </CardButton>
        <CardButton color="gray" onClick={() => props.setView("notes")}>
          <CardIcon icon={BiNote} /> Notes
        </CardButton>
        <CardButton color="gray" onClick={() => props.setView("help")}>
          <CardIcon icon={AiOutlineExclamationCircle} /> I'm Stuck
        </CardButton>
        <CardButton color="gray" onClick={props.goToSummary}>
        <CardIcon icon={IoMdCheckmarkCircle} /> I'm Done
        </CardButton>
      </CardButtonGrid>
    </>
  );
}
