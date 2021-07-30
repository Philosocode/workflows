import { useState } from "react";
import { Box, ButtonGroup, Center, Image } from "@chakra-ui/react";

import { MarkdownEditor } from "editor/components/markdown-editor.component";
import { Button } from "shared/components/button.component";
import { WorkflowStep } from "shared/components/workflow-step.component";

import duckImage from "consume/assets/timothy-dykes-LhqLdDPcSV8-unsplash.png";
import { useStep } from "shared/hooks/use-step.hook";

const introMessage = (
  <>
    <Box>
      Hi, I'm Quackers the rubber duck. I'm here to help you get un-stuck!
    </Box>
    <Box>Just one question. Do you need help with programming?</Box>
  </>
);

const regularPrompts = [
  "Okay, cool! What problem are you struggling with?",
  "What should be happening? What are you expecting?",
  "What's actually happening?",
  "What have you tried so far?",
  "That's all the questions I got! Hope this helped!",
];

const progPrompts = [
  "Okay, cool! What problem are you struggling with?",
  "What's the code supposed to do?",
  "What's actually happening?",
  "What have you tried so far?",
  "Explain your code in detail, line-by-line.",
  "That's all the questions I got! Hope this helped!",
];

interface IProps {
  goBack: () => void;
}
export function StudyHelp(props: IProps) {
  const [isProgrammer, setIsProgrammer] = useState<boolean>();
  const [text, setText] = useState("");
  const { step, increment } = useStep(1, progPrompts.length);

  function getMessage() {
    if (isProgrammer === undefined) return introMessage;

    return isProgrammer ? progPrompts[step - 1] : regularPrompts[step - 1];
  }

  function isDone() {
    if (isProgrammer === undefined) return false;

    return (
      (isProgrammer && step === progPrompts.length) ||
      (!isProgrammer && step === regularPrompts.length)
    );
  }

  function onNext() {
    setText("");
    increment();
  }

  return (
    <>
      <WorkflowStep messageContent={getMessage()}>
        <Center mb={10}>
          <Image src={duckImage} alt="Rubber Duck" />
        </Center>
        {isProgrammer === undefined ? (
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
        ) : (
          <>
            <MarkdownEditor value={text} setValue={setText} />
            <ButtonGroup mt={5}>
              <Button color="green" onClick={onNext} disabled={isDone()}>
                Next
              </Button>
              <Button color="gray" onClick={props.goBack}>
                Return to Menu
              </Button>
            </ButtonGroup>
          </>
        )}
      </WorkflowStep>
    </>
  );
}
