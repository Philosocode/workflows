import { ReactNode } from "react";
import { FaCog, FaStopwatch } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { BiReset } from "react-icons/bi";
import { Flex, HStack, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "features/step/step.slice";

import { INavMenuItem, NavMenu } from "./nav-menu.component";
import { IconButton } from "shared/components/button/icon-button.component";
import { LevelStatus } from "features/game/level-status.component";
import { SettingsModal } from "../modal/components/settings-modal.component";
import { ExitWorkflowModal } from "../modal/components/exit-workflow-modal.component";
import { ResetWorkflowModal } from "../modal/components/reset-workflow-modal.component";
import { StopwatchTimerIcon } from "features/timer/components/stopwatch-timer-icon.component";
import { StopwatchModal } from "features/timer/components/stopwatch-modal.component";

interface IProps {
  exitUrl?: string;
  handleReset?: () => void;

  rightSlot?: ReactNode;
}
export function AppNavbar(props: IProps) {
  const [exitModalOpen, toggleExitModal] = useToggle();
  const [resetModalOpen, toggleResetModal] = useToggle();
  const [settingsModalOpen, toggleSettingsModal] = useToggle();
  const [stopwatchModalOpen, toggleStopwatchModal] = useToggle();

  const currentStep = useAppSelector(selectCurrentStep);
  const numColumns = useBreakpointValue({ base: 2, sm: 3 });

  function getMenuItems() {
    let items: INavMenuItem[] = [];

    if (props.exitUrl) {
      items.push({
        text: "Exit Workflow",
        onClick: toggleExitModal,
        icon: <IoMdExit />,
      });
    }

    if (props.handleReset && currentStep > 1) {
      items.push({
        text: "Reset Workflow",
        onClick: toggleResetModal,
        icon: <BiReset />,
      });
    }

    items = items.concat([
      {
        text: "Stopwatch",
        icon: <FaStopwatch />,
        onClick: toggleStopwatchModal,
      },
      {
        text: "Settings",
        icon: <FaCog />,
        onClick: toggleSettingsModal,
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
          {props.exitUrl && (
            <IconButton
              aria-label="Exit Workflow"
              icon={<IoMdExit />}
              onClick={toggleExitModal}
            />
          )}
          {props.handleReset && currentStep !== 1 && (
            <IconButton
              aria-label="Reset Workflow"
              hoverColor="red"
              icon={<BiReset />}
              onClick={toggleResetModal}
            />
          )}
        </HStack>

        <HStack>
          <LevelStatus />
        </HStack>

        <HStack
          display={{ base: "none", sm: "flex" }}
          justifyContent="flex-end"
        >
          <StopwatchTimerIcon showStopwatch={toggleStopwatchModal} />
          <IconButton
            aria-label="Settings"
            icon={<FaCog />}
            onClick={toggleSettingsModal}
          />
          {props.rightSlot}
        </HStack>

        <Flex
          display={{ base: "flex", sm: "none" }}
          alignItems="center"
          justifyContent="flex-end"
        >
          {props.rightSlot}
          <NavMenu items={getMenuItems()} />
        </Flex>
      </SimpleGrid>

      {props.exitUrl && (
        <ExitWorkflowModal
          isOpen={exitModalOpen}
          handleClose={toggleExitModal}
          redirectUrl={props.exitUrl}
        />
      )}

      {props.handleReset && (
        <ResetWorkflowModal
          isOpen={resetModalOpen}
          handleClose={toggleResetModal}
          handleReset={props.handleReset}
        />
      )}

      <StopwatchModal
        isOpen={stopwatchModalOpen}
        toggleModal={toggleStopwatchModal}
      />
      <SettingsModal
        isOpen={settingsModalOpen}
        toggleModal={toggleSettingsModal}
      />
    </>
  );
}
