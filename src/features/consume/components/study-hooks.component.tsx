import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
  VStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  allHooks,
  connectHooks,
  processHooks,
} from "features/hooks/data/hooks.data";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useLocationStore } from "features/location/location.store";
import { theme } from "shared/styles/theme";

import { Button } from "shared/components/button/button.component";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";
import { HookChecklist } from "features/hooks/components/hook-checklist.component";

interface IProps {
  nextUrl?: string;
  showPrompt?: boolean;
}
export function StudyHooks(props: IProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [showChecklists, toggleShowChecklists] = useToggle();

  const totalHooks = Object.values(allHooks).length;
  const { completedIds } = useHookStore();

  const progressSize = useBreakpointValue({
    base: "80px",
    md: "125px",
  });

  // complete 60% of the hooks to get a full bar
  const fullLimit = Math.round(totalHooks * 0.6);
  // complete 80% of the hooks to get a gold bar
  const extraLimit = Math.round(totalHooks * 0.8);

  const currentCount = completedIds.size;
  const progressFull = currentCount >= fullLimit;
  const progressExtra = currentCount >= extraLimit;
  const currentPercent = Math.round((currentCount / fullLimit) * 100);

  const { currentStep } = useLocationStore();
  const nextUrl = props.nextUrl ?? `/consume/${currentStep + 1}`;

  function handleTabChange(index: number) {
    setTabIndex(index);
  }

  function getBarColor() {
    if (progressExtra) return "yellow.400";

    return "green.200";
  }

  function getTextColor() {
    if (!progressFull) return "currentcolor";
    if (!progressExtra) return "green.200";

    return "yellow.400";
  }

  const message =
    props.showPrompt && !showChecklists ? (
      "Were there any concepts you struggled with or want to understand better?"
    ) : (
      <Box>
        <UnorderedList>
          <ListItem>
            Complete as many prompts as you need to better understand the
            concept(s).
          </ListItem>
          <ListItem>
            Not all prompts may be relevant to your situation.
          </ListItem>
        </UnorderedList>
      </Box>
    );

  return (
    <ConsumeWorkflowStep
      message={message}
      buttons={
        props.showPrompt && !showChecklists ? (
          <CardButtonGrid
            buttons={[
              { text: "Yes", onClick: toggleShowChecklists },
              { text: "No", to: nextUrl },
            ]}
          />
        ) : (
          <Link to={nextUrl}>
            <Button
              mt={theme.spacing.workflowStepButtonSpacing}
              colorScheme="green"
            >
              Next
            </Button>
          </Link>
        )
      }
    >
      {(!props.showPrompt || showChecklists) && (
        <VStack alignItems="start">
          <Flex
            position={{ base: "sticky", sm: "relative" }}
            top="0"
            bg="gray.800"
            w="full"
            zIndex={9999}
          >
            <CircularProgress
              color={getBarColor()}
              value={currentPercent}
              capIsRound
              thickness={5}
              m="0 auto"
              size={progressSize}
            >
              <CircularProgressLabel
                fontWeight={progressExtra ? "bold" : "normal"}
                textColor={getTextColor()}
                transition="color 600ms"
              >
                {currentPercent}%
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Tabs colorScheme="green" index={tabIndex} onChange={handleTabChange}>
            <TabList>
              <Tab>Process</Tab>
              <Tab>Connect</Tab>
            </TabList>
            <TabPanels>
              <TabPanel paddingLeft={0} pb={0}>
                <HookChecklist hooks={Object.values(processHooks)} />
              </TabPanel>
              <TabPanel paddingLeft={0} pb={0}>
                <HookChecklist hooks={Object.values(connectHooks)} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      )}
    </ConsumeWorkflowStep>
  );
}
