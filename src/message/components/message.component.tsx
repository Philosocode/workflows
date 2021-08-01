import { Box } from "@chakra-ui/react";

import { theme } from "theme";

export interface IProps {
  children: React.ReactNode;
}
export function Message(props: IProps) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      mb={theme.spacing.nextButtonMarginTop}
      maxW="full"
      rounded="xl"
      shadow="md"
      p={10}
      fontSize="3xl"
    >
      {props.children}
    </Box>
  );
}
