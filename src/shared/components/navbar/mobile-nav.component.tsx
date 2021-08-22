import { HStack } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

import { IAppNavbarProps } from "./app-navbar.component";
import { INavMenuItem, NavMenu } from "./nav-menu.component";
import { BlockCounter } from "../block-counter/block-counter.component";
import { StopwatchTimerIcon } from "features/timer/components/stopwatch-timer-icon.component";

export function MobileNav(props: IAppNavbarProps) {
  function getMenuItems() {
    let items: INavMenuItem[] = [];

    if (props.exitUrl) {
      items.push({
        text: "Exit Workflow",
        onClick: () => props.toggleModal("exit"),
        icon: <IoMdExit />,
      });
    }

    if (props.handleReset && props.currentStep > 1) {
      items.push({
        text: "Reset Workflow",
        onClick: () => props.toggleModal("reset"),
        icon: <BiReset />,
      });
    }

    items = items.concat([
      {
        text: "Settings",
        icon: <FaCog />,
        onClick: () => props.toggleModal("settings"),
      },
    ]);

    return items;
  }

  return (
    <HStack
      display={{ base: "flex", sm: "none" }}
      alignItems="center"
      spacing={3}
      justifyContent="flex-end"
    >
      <StopwatchTimerIcon
        showStopwatch={() => props.toggleModal("stopwatch")}
      />
      <NavMenu items={getMenuItems()} />
      {props.blockCounter && <BlockCounter {...props.blockCounter} />}
    </HStack>
  );
}
