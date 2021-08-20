import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

import { useToggle } from "shared/hooks/use-toggle.hook";

import { IconButton } from "shared/components/button/icon-button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";

interface IProps {
  redirectUrl: string;

  icon?: JSX.Element;
  header?: string;
  text?: string;
}
export function GoBackModal(props: IProps) {
  const [modalShowing, toggleModal] = useToggle(false);

  return (
    <>
      <Box>
        <IconButton
          aria-label="Go Back"
          icon={props.icon ?? <IoMdExit />}
          onClick={toggleModal}
        />
      </Box>
      <ModalWrapper isOpen={modalShowing} handleClose={toggleModal}>
        <ModalContent
          header={props.header ?? "Exit Workflow"}
          body={props.text ?? "Are you sure you want to exit this workflow?"}
          footer={
            <ButtonGroup spacing={5}>
              <Link to={props.redirectUrl}>
                <Button colorScheme="green">Yes</Button>
              </Link>
              <Button onClick={toggleModal}>Cancel</Button>
            </ButtonGroup>
          }
        />
      </ModalWrapper>
    </>
  );
}
