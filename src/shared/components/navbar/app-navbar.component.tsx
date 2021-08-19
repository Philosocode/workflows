import { ReactNode } from "react";
import { HStack, SimpleGrid } from "@chakra-ui/react";

interface IProps {
  leftSlot?: ReactNode;
  middleSlot?: ReactNode;
  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  return (
    <SimpleGrid
      as="nav"
      columns={2}
      mt={{ base: 3, md: 5 }}
      mb={{ base: 5, md: 10 }}
    >
      <HStack>{props.leftSlot}</HStack>
      <HStack justifyContent="flex-end">{props.rightSlot}</HStack>
    </SimpleGrid>
  );
}
