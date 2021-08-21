import { Box } from "@chakra-ui/react";

import { ITopic, TPracticeMode } from "../shared/practice-questions.types";
import { useTheme } from "shared/hooks/use-theme.hook";
import { theme } from "shared/styles/theme";
import { pluralizeString } from "shared/helpers/string.helpers";

import { InputGroup } from "shared/components/form/input-group.component";

interface IProps {
  currentTopic: ITopic;
  updateCurrentTopicTitle: (newTitle: string) => void;
  practiceMode: TPracticeMode;
}
export function PracticeQuestionsStudyMessage(props: IProps) {
  const dlTheme = useTheme();

  function updateTopicTitle(newTitle: string) {
    if (newTitle === props.currentTopic.title) return;

    props.updateCurrentTopicTitle(newTitle);
  }

  return (
    <>
      <Box>Your current topic is:</Box>
      <InputGroup
        id="currentTopic"
        fontSize="inherit"
        label="Current Topic"
        colorScheme="green"
        fontWeight={500}
        textColor={dlTheme.colors.green}
        value={props.currentTopic.title}
        onChange={(event) => updateTopicTitle(event.target.value)}
        autoCorrect="false"
      />

      {props.practiceMode === "numQuestions" && (
        <Box my={theme.spacing.messageBoxSpacing}>
          You've completed {props.currentTopic.totalCount} {}
          {pluralizeString("question", props.currentTopic.totalCount)} for this
          topic.
        </Box>
      )}

      {props.practiceMode === "timer" && (
        <Box my={theme.spacing.messageBoxSpacing}>
          You've studied this topic for {props.currentTopic.totalTime} {}
          {pluralizeString("minute", props.currentTopic.totalTime)}.
        </Box>
      )}

      <Box fontSize={theme.typography.fontSize.messageAside}>
        By the way, you can change the topic title by typing in the text input
        above.
      </Box>
    </>
  );
}
