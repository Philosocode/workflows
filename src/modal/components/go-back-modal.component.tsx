import { Box, ButtonGroup } from "@chakra-ui/react";
import { IoMdReturnLeft } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { IconType } from "react-icons";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { Button } from "shared/components/button/button.component";
import { IconButton } from "shared/components/icon-button.component";
import { ModalContent } from "modal/components/modal-content.component";
import { ModalWrapper } from "modal/components/modal-wrapper.component";

interface IProps {
  redirectUrl: string;
  text: string;

  icon?: JSX.Element;
  header?: string;
}
export function GoBackModal(props: IProps) {
  const history = useHistory();
  const [modalShowing, toggleModal] = useToggle(false);

  function onExit() {
    history.push(props.redirectUrl);
  }

  return (
    <>
      <Box>
        <IconButton
          aria-label="Go Back"
          icon={props.icon ?? <IoMdReturnLeft />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} onClose={toggleModal}>
        <ModalContent
          header={props.header ?? "Exit Workflow"}
          body={props.text}
          footer={
            <ButtonGroup spacing={5}>
              <Button onClick={onExit}>Yes</Button>
              <Button colorScheme="gray" onClick={toggleModal}>
                Cancel
              </Button>
            </ButtonGroup>
          }
        />
      </ModalWrapper>
    </>
  );
}
