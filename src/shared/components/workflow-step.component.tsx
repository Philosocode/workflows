import { Box } from "@chakra-ui/react";

import { Message } from "message/components/message.component";

interface IProps {
  children: React.ReactNode;
  messageContent: React.ReactNode;
}
export function WorkflowStep(props: IProps) {
  return (
    <Box>
      <Message>{props.messageContent}</Message>
      <Box py={4}>{props.children}</Box>
    </Box>
  );
}
