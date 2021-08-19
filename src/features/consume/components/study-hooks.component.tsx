import { useState } from "react";
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
} from "@chakra-ui/react";
import { MarkdownEditor } from "shared/components/editor/markdown-editor.component";
import { HookChecklist } from "features/hooks/components/hook-checklist.component";

import {
  allHooks,
  connectHooks,
  processHooks,
} from "features/hooks/data/hooks.data";
import { useHookStore } from "features/hooks/logic/hook.store";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppSelector } from "shared/redux/store";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "features/step/step.slice";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { ConsumeWorkflowStep } from "./consume-workflow-step.component";

interface IProps {
  showPrompt?: boolean;
}
export function StudyHooks(props: IProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [showChecklists, toggleShowChecklists] = useToggle();
  const [editorText, setEditorText] = useState("");

  const totalHooks = Object.values(allHooks).length;
  const { completedIds } = useHookStore();

  // complete 60% of the hooks to get a full bar
  const fullLimit = Math.round(totalHooks * 0.6);
  // complete 80% of the hooks to get a gold bar
  const extraLimit = Math.round(totalHooks * 0.8);

  const currentCount = completedIds.size;
  const progressFull = currentCount >= fullLimit;
  const progressExtra = currentCount >= extraLimit;
  const currentPercent = Math.round((currentCount / fullLimit) * 100);

  const nextStep = useAppSelector(selectNextStep);
  const nextUrl = `/consume/${nextStep}`;

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
          <ListItem>
            If needed, use the textarea below to write out your thoughts.
          </ListItem>
        </UnorderedList>
      </Box>
    );

  return (
    <ConsumeWorkflowStep
      message={message}
      showButton={!props.showPrompt || showChecklists}
      buttonProps={{
        colorScheme: progressExtra ? "orange" : "green",
        mt: theme.spacing.workflowStepButtonSpacing,
      }}
    >
      {props.showPrompt && !showChecklists ? (
        <CardButtonGrid
          buttons={[
            { text: "Yes", onClick: toggleShowChecklists },
            { text: "No", to: nextUrl },
          ]}
        />
      ) : (
        <VStack alignItems="start">
          <CircularProgress
            alignSelf="center"
            color={getBarColor()}
            value={currentPercent}
            capIsRound
            thickness={5}
            size="125px"
          >
            <CircularProgressLabel
              fontWeight={progressExtra ? "bold" : "normal"}
              textColor={getTextColor()}
              transition="color 600ms"
            >
              {currentPercent}%
            </CircularProgressLabel>
          </CircularProgress>
          <Tabs
            colorScheme="green"
            index={tabIndex}
            onChange={handleTabChange}
            mb={theme.spacing.workflowStepButtonSpacing}
          >
            <TabList>
              <Tab>Process</Tab>
              <Tab>Connect</Tab>
            </TabList>
            <TabPanels mb={1}>
              <TabPanel paddingLeft={0}>
                <HookChecklist hooks={Object.values(processHooks)} />
              </TabPanel>
              <TabPanel paddingLeft={0}>
                <HookChecklist hooks={Object.values(connectHooks)} />
              </TabPanel>
            </TabPanels>
            <MarkdownEditor value={editorText} setValue={setEditorText} />
          </Tabs>
        </VStack>
      )}
    </ConsumeWorkflowStep>
  );
}
