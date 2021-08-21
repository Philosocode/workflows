import { ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Button } from "shared/components/button/button.component";
import { ModalContent } from "shared/components/modal/components/modal-content.component";
import { ModalWrapper } from "shared/components/modal/components/modal-wrapper.component";
import { IModalProps } from "../shared/modal.types";

interface IProps extends IModalProps {
  redirectUrl: string;

  header?: string;
  text?: string;
}
export function GoBackModal(props: IProps) {
  return (
    <ModalWrapper isOpen={props.isOpen} handleClose={props.handleClose}>
      <ModalContent
        header={props.header ?? "Exit Workflow"}
        body={props.text ?? "Are you sure you want to exit this workflow?"}
        footer={
          <ButtonGroup spacing={5}>
            <Link to={props.redirectUrl}>
              <Button colorScheme="green">Yes</Button>
            </Link>
            <Button onClick={props.handleClose}>Cancel</Button>
          </ButtonGroup>
        }
      />
    </ModalWrapper>
  );
}
