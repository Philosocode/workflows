import { ReactNode } from "react";
import { FaCog, FaStopwatch } from "react-icons/fa";
import { Flex, HStack, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { INavMenuItem, NavMenu } from "./nav-menu.component";
import { useToggle } from "shared/hooks/use-toggle.hook";

import { IconButton } from "../button/icon-button.component";
import { LevelStatus } from "features/game/level-status.component";
import { SettingsModal } from "../modal/components/settings-modal.component";
import { StopwatchModal } from "features/timer/stopwatch-modal.component";

interface IProps {
  leftSlot?: INavMenuItem[];
  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  const [settingsShowing, toggleSettings] = useToggle();
  const [stopwatchShowing, toggleStopwatch] = useToggle();
  const numColumns = useBreakpointValue({ base: 2, sm: 3 });

  function getMenuItems() {
    let items: INavMenuItem[] = props.leftSlot ?? [];

    items = items.concat([
      {
        text: "Stopwatch",
        icon: <FaStopwatch />,
        onClick: toggleStopwatch,
      },
      {
        text: "Settings",
        icon: <FaCog />,
        onClick: toggleSettings,
      },
    ]);

    return items;
  }

  return (
    <>
      <SimpleGrid
        as="nav"
        columns={numColumns}
        mt={{ base: 3, md: 5 }}
        mb={{ base: 5, md: 10 }}
        alignItems="center"
      >
        <HStack display={{ base: "none", sm: "flex" }}>
          {props.leftSlot?.map((item) => (
            <IconButton
              key={item.text}
              aria-label={item.text}
              icon={item.icon}
              onClick={item.onClick}
            />
          ))}
        </HStack>

        <HStack>
          <LevelStatus />
        </HStack>

        <HStack
          display={{ base: "none", sm: "flex" }}
          justifyContent="flex-end"
        >
          <IconButton
            aria-label="Stopwatch"
            icon={<FaStopwatch />}
            onClick={toggleStopwatch}
          />
          <IconButton
            aria-label="Settings"
            icon={<FaCog />}
            onClick={toggleSettings}
          />
          {props.rightSlot}
        </HStack>

        <Flex display={{ base: "flex", sm: "none" }} justifyContent="flex-end">
          <NavMenu items={getMenuItems()} />
          {props.rightSlot}
        </Flex>
      </SimpleGrid>

      <StopwatchModal isOpen={stopwatchShowing} toggleModal={toggleStopwatch} />
      <SettingsModal isOpen={settingsShowing} toggleModal={toggleSettings} />
    </>
  );
}
