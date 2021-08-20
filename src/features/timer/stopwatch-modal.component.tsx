import { Box } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { IconButton } from "shared/components/button/icon-button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { Stopwatch } from "./stopwatch.component";

export function StopwatchModal() {
  const [modalShowing, toggleModal] = useToggle();

  return (
    <>
      <Box>
        <IconButton
          aria-label="Stopwatch"
          icon={<FaStopwatch />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} handleClose={toggleModal}>
        <ModalContent
          header="Stopwatch"
          body={<Stopwatch />}
          footer={<div />}
        />
      </ModalWrapper>
    </>
  );
}
