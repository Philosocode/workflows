import { HStack } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";
import { FaCog } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

import { IAppNavbarProps } from "./app-navbar.component";

import { BlockCounter } from "../block-counter/block-counter.component";
import { LevelStatus } from "features/game/components/level-status.component";
import { StopwatchTimerIcon } from "features/timer/components/stopwatch-timer-icon.component";
import { IconButton } from "../button/icon-button.component";

export function DesktopNav(props: IAppNavbarProps) {
  return (
    <>
      <HStack display={{ base: "none", sm: "flex" }}>
        {props.exitUrl && (
          <IconButton
            aria-label="Exit Workflow"
            icon={<IoMdExit />}
            onClick={() => props.toggleModal("exit")}
          />
        )}

        {props.handleReset && props.currentStep !== 1 && (
          <IconButton
            aria-label="Reset Workflow"
            hoverColor="red"
            icon={<BiReset />}
            onClick={() => props.toggleModal("reset")}
          />
        )}
      </HStack>

      <HStack>
        <LevelStatus />
      </HStack>

      <HStack display={{ base: "none", sm: "flex" }} justifyContent="flex-end">
        <StopwatchTimerIcon
          showStopwatch={() => props.toggleModal("stopwatch")}
        />
        <IconButton
          aria-label="Settings"
          icon={<FaCog />}
          onClick={() => props.toggleModal("settings")}
        />
        {props.blockCounter && <BlockCounter {...props.blockCounter} />}
      </HStack>
    </>
  );
}
