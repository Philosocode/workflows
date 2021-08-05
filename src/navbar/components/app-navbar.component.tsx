import { ReactNode } from "react";
import { Box, Grid, HStack } from "@chakra-ui/react";

import { Logo } from "shared/components/logo.component";

interface IProps {
  leftSlot?: ReactNode;
  middleSlot?: ReactNode;
  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  return (
    <Grid
      as="nav"
      templateColumns="repeat(3, 1fr)"
      mt={{ base: 3, md: 5 }}
      mb={{ base: 5, md: 10 }}
    >
      <HStack>{props.leftSlot}</HStack>
      <Box w="max-content" m="auto">
        <Logo />
      </Box>
      <HStack justifyContent="flex-end">{props.rightSlot}</HStack>
    </Grid>
  );
}
