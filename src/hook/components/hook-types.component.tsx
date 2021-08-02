import {
  Grid,
  Icon,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BiNetworkChart } from "react-icons/bi";
import { AiTwotoneFire } from "react-icons/ai";
import { FaBrain, FaMemory } from "react-icons/fa";

import { THookType } from "hook/shared/hook.types";
import { Button } from "shared/components/button/button.component";
import { capitalizeFirstLetter } from "shared/helpers/string.helper";

const hookTypes: { icon: IconType; text: THookType }[] = [
  { icon: AiTwotoneFire, text: "common" },
  { icon: FaBrain, text: "process" },
  { icon: BiNetworkChart, text: "connect" },
  { icon: FaMemory, text: "memorize" },
];

interface IProps {
  onSelect: (type: THookType) => void;
}
export function HookTypes(props: IProps) {
  return (
    <ModalContent>
      <ModalHeader>Select Hook Type</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          {hookTypes.map((hookType) => (
            <IconButton
              icon={hookType.icon}
              onClick={() => props.onSelect(hookType.text)}
            >
              {capitalizeFirstLetter(hookType.text)}
            </IconButton>
          ))}
        </Grid>
      </ModalBody>
      <ModalFooter />
    </ModalContent>
  );
}

function IconButton(props: {
  children: React.ReactNode;
  onClick: () => void;
  icon: IconType;
}) {
  const hoverBg = useColorModeValue("green.500", "gray.600");

  return (
    <Button
      colorScheme="gray"
      onClick={props.onClick}
      _hover={{ bg: hoverBg, color: "white" }}
    >
      <Icon as={props.icon} boxSize={5} mr={2} />
      {props.children}
    </Button>
  );
}
