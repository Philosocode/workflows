import { ReactNode } from "react";
import { Box, HStack } from "@chakra-ui/react";

import { Logo } from "shared/components/logo.component";

interface IProps {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  return (
    <HStack as="nav" justify="space-between" mt={5} mb={10}>
      <HStack>{props.leftSlot}</HStack>
      <Box>
        <Logo />
      </Box>
      <HStack>{props.rightSlot}</HStack>
    </HStack>
  );
}
