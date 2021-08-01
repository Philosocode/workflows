import { HStack } from "@chakra-ui/react";
import { FaRandom } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";

import { getRandomHook } from "hook/shared/hook.helper";
import { HoverIcon } from "icon/components/hover-icon.component";

interface IProps {
  currentTitle: string;
  toggleModal: () => void;
  setTitle: (title: string) => void;
}
export function CreateHookIcons(props: IProps) {
  return (
    <HStack spacing={5}>
      <HoverIcon as={RiLightbulbFlashFill} onClick={props.toggleModal} />
      <HoverIcon
        as={FaRandom}
        onClick={() => props.setTitle(getRandomHook(props.currentTitle))}
        boxSize={6}
      />
    </HStack>
  );
}
