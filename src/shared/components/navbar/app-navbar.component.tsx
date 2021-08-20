import { ReactNode } from "react";
import { HStack, SimpleGrid } from "@chakra-ui/react";
import { LevelStatus } from "features/game/level-status.component";
import { SettingsModal } from "../modal/components/settings-modal.component";
import { StopwatchModal } from "features/timer/stopwatch-modal.component";

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
      alignItems="center"
    >
      <HStack>{props.leftSlot}</HStack>
      <HStack justifyContent="center">
        <LevelStatus />
      </HStack>
      <HStack justifyContent="flex-end">
        {
          <>
            <StopwatchModal />
            <SettingsModal />
            {props.rightSlot}
          </>
        }
      </HStack>
    </SimpleGrid>
  );
}
