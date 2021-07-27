import { useState } from "react";
import {
  Box,
  ButtonGroup,
  Center,
  Checkbox,
  CheckboxGroup,
  Image,
  VStack,
} from "@chakra-ui/react";

import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

import duckImage from "../assets/timothy-dykes-LhqLdDPcSV8-unsplash.png";

interface IProps {
  goBack: () => void;
}
export function StudyHelp(props: IProps) {
  const [isProgrammer, setIsProgrammer] = useState<boolean>();
  const [text, setText] = useState("");

  let message: React.ReactNode;

  switch (isProgrammer) {
    case false:
      message = (
        <VStack alignItems="start">
          <Box>Okay, cool! Tell me...</Box>
          <CheckboxGroup size="lg" colorScheme="green">
            <Checkbox>What problem are you struggling with?</Checkbox>
            <Checkbox>
              What should be happening? What are you expecting?
            </Checkbox>
            <Checkbox>What's actually happening?</Checkbox>
            <Checkbox>What have you tried so far?</Checkbox>
          </CheckboxGroup>
        </VStack>
      );
      break;
    case true:
      message = (
        <VStack alignItems="start">
          <Box>Okay, cool! Tell me...</Box>
          <CheckboxGroup size="lg" colorScheme="green">
            <Checkbox>What problem are you struggling with?</Checkbox>
            <Checkbox>What's the code supposed to do?</Checkbox>
            <Checkbox>What's actually happening?</Checkbox>
            <Checkbox>What have you tried so far?</Checkbox>
            <Checkbox>Explain your code in detail, line-by-line.</Checkbox>
          </CheckboxGroup>
        </VStack>
      );
      break;
    default:
      message = (
        <>
          <Box>
            Hi, I'm Quackers the rubber duck. I'm here to help you get un-stuck!
          </Box>
          <Box>Just one question. Do you need help with programming?</Box>
        </>
      );
  }

  return (
    <>
      <WorkflowStep messageContent={message}>
        <Center mb={10}>
          <Image src={duckImage} alt="Rubber Duck" />
        </Center>
        {isProgrammer === undefined && (
          <ButtonGroup spacing={"1rem"}>
            <Button color="green" onClick={() => setIsProgrammer(true)}>
              Yes
            </Button>
            <Button color="red" onClick={() => setIsProgrammer(false)}>
              No
            </Button>
            <Button color="gray" onClick={props.goBack}>
              Go Back
            </Button>
          </ButtonGroup>
        )}
        {isProgrammer !== undefined && (
          <>
            <MarkdownEditor value={text} setValue={setText} />
            <Button color="gray" onClick={props.goBack} mt={5}>
              Go Back
            </Button>
          </>
        )}
      </WorkflowStep>
    </>
  );
}
