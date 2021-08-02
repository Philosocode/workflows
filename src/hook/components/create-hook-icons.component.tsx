import { HStack } from "@chakra-ui/react";
import { FaRandom } from "react-icons/fa";
import { RiLightbulbFlashFill } from "react-icons/ri";

import { getRandomHook } from "hook/shared/hook.helper";
import { IconButton } from "shared/components/icon-button.component";

interface IProps {
  currentTitle: string;
  toggleModal: () => void;
  setTitle: (title: string) => void;
}
export function CreateHookIcons(props: IProps) {
  return (
    <HStack>
      <IconButton
        aria-label="Hook Select"
        icon={<RiLightbulbFlashFill />}
        onClick={props.toggleModal}
      />
      <IconButton
        aria-label="Get Random Hook"
        icon={<FaRandom />}
        onClick={() => props.setTitle(getRandomHook(props.currentTitle))}
      />
    </HStack>
  );
}
