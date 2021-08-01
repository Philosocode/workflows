import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { allHooksHash } from "hook/shared/hooks.data";
import { THookType } from "hook/shared/hook.types";
import { Button } from "shared/components/button.component";
import { capitalizeFirstLetter } from "shared/helpers/string.helper";
import { HookSelectGrid } from "./hook-select-grid.component";

interface IProps {
  onSelect: (hook: string) => void;
  goBack: () => void;
  hookType: THookType;
}
export function HookSelect(props: IProps) {
  return (
    <ModalContent>
      <ModalHeader>
        Select Hook: {capitalizeFirstLetter(props.hookType)}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <HookSelectGrid
          hooks={allHooksHash[props.hookType]}
          onSelect={props.onSelect}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="gray" onClick={props.goBack}>
          Go Back
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
