import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Grid,
} from "@chakra-ui/react";

import { THookType } from "hook/shared/hook.types";
import { Button } from "shared/components/button.component";

interface IProps {
  onSelect: (type: THookType) => void;
}
export function HookTypes(props: IProps) {
  return (
    <ModalContent>
      <ModalHeader>Select Type</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Button color="gray" onClick={() => props.onSelect("common")}>
            Common
          </Button>
          <Button color="gray" onClick={() => props.onSelect("process")}>
            Process
          </Button>
          <Button color="gray" onClick={() => props.onSelect("connect")}>
            Connect
          </Button>
          <Button color="gray" onClick={() => props.onSelect("memorize")}>
            Memorize
          </Button>
        </Grid>
      </ModalBody>
      <ModalFooter />
    </ModalContent>
  );
}
