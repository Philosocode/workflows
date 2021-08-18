import {
  Box,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { HookChecklist } from "features/hooks/components/hook-checklist.component";

import { connectHooks, processHooks } from "features/hooks/data/hooks.data";
import { useState } from "react";
import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useAppSelector } from "shared/redux/store";
import { theme } from "shared/styles/theme";
import { selectNextStep } from "step/step.slice";

import { ConsumeWorkflowStep } from "./consume-workflow-step.component";

interface IProps {
  showPrompt?: boolean;
}
export function StudyHooks(props: IProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const [showChecklists, toggleShowChecklists] = useToggle();
  const [editorText, setEditorText] = useState("");

  const nextStep = useAppSelector(selectNextStep);
  const nextUrl = `/consume/${nextStep}`;

  function handleTabChange(index: number) {
    setTabIndex(index);
  }

  const message = showChecklists ? (
    <Box>
      <UnorderedList>
        <ListItem>
          Complete as many prompts as you need to better understand the
          concept(s).
        </ListItem>
        <ListItem>Not all prompts may be relevant to your situation.</ListItem>
        <ListItem>
          If needed, use the textarea below to write out your thoughts.
        </ListItem>
      </UnorderedList>
    </Box>
  ) : (
    "Were there any concepts you struggled with or want to understand better?"
  );

  return (
    <ConsumeWorkflowStep message={message} showButton={showChecklists}>
      {!showChecklists ? (
        <CardButtonGrid
          buttons={[
            { text: "Yes", onClick: toggleShowChecklists },
            { text: "No", to: nextUrl },
          ]}
        />
      ) : (
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
          <TabPanels>
            <TabPanel paddingLeft={0}>
              <HookChecklist hooks={Object.values(processHooks)} />
            </TabPanel>
            <TabPanel paddingLeft={0}>
              <HookChecklist hooks={Object.values(connectHooks)} />
            </TabPanel>
          </TabPanels>
          <MarkdownEditor value={editorText} setValue={setEditorText} />
        </Tabs>
      )}
    </ConsumeWorkflowStep>
  );
}
