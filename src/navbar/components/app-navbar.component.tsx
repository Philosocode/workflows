import { ReactNode } from "react";
import { HStack } from "@chakra-ui/react";

interface IProps {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  return (
    <HStack as="nav" justify="space-between" mt={5} mb={10}>
      <HStack>{props.leftSlot}</HStack>
      <HStack>{props.rightSlot}</HStack>
    </HStack>
  );
}
