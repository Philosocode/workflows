import { ReactNode } from "react";
import { Box, HStack, SimpleGrid } from "@chakra-ui/react";

import { Logo } from "shared/components/logo.component";

interface IProps {
  leftSlot?: ReactNode;
  middleSlot?: ReactNode;
  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  return (
    <SimpleGrid
      as="nav"
      columns={3}
      mt={{ base: 3, md: 5 }}
      mb={{ base: 5, md: 10 }}
    >
      <HStack>{props.leftSlot}</HStack>
      <Box w="max-content" m="auto">
        <Logo />
      </Box>
      <HStack justifyContent="flex-end">{props.rightSlot}</HStack>
    </SimpleGrid>
  );
}
