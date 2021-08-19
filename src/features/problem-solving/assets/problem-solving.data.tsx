import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { ProblemSolvingStart } from "features/problem-solving/components/problem-solving-start.component";
import { ProblemSolvingFinish } from "features/problem-solving/components/problem-solving-finish.component";
import { ProblemSolvingWorkflowStep } from "features/problem-solving/components/problem-solving-workflow-step.component";
import { theme } from "shared/styles/theme";

const understandPrompts = [
  "Restate the problem in your own words.",
  "What do you know so far?",
  "What's unknown? What are you trying to find or figure out?",
  "What are the inputs?",
  "What are the outputs? What should be returned?",
  "Are there any conditions or requirements you need to keep in mind?",
];

const understandRoutes = understandPrompts.map((prompt) => ({
  render: () => <ProblemSolvingWorkflowStep message={prompt} />,
}));

const examplePrompts = [
  "Come up with simple, concrete examples.",
  "Time to increase the complexity! Come up with more complex examples.",
  "Have you done any similar problem in the past? If so, is there anything you can reuse?",
  "What edge cases do you need to keep in mind?",
];

const exampleRoutes = examplePrompts.map((prompt) => ({
  render: () => <ProblemSolvingWorkflowStep message={prompt} />,
}));

const breakdownPrompts = [
  <>
    <Box>Break down the problem into main tasks.</Box>
    <Box>
      Then, break down each main task into atomic subtasks (simple,
      easy-to-understand and implement)
    </Box>
  </>,
];

const breakdownRoutes = breakdownPrompts.map((prompt) => ({
  render: () => <ProblemSolvingWorkflowStep message={prompt} />,
}));

const codeRoutes = [
  {
    render: () => (
      <ProblemSolvingWorkflowStep
        editor={{ showEditor: false }}
        message={
          <>
            <Box>Start with the low-hanging fruit.</Box>
            <Box>Complete any tasks that you can do now.</Box>
          </>
        }
      />
    ),
  },
  {
    render: () => (
      <ProblemSolvingWorkflowStep
        message={
          <>
            <Box mb={theme.spacing.messageBoxSpacing}>
              Stay on this screen until you've solved the problem.
            </Box>
            <Box>If you're stuck, these tips might help you:</Box>
            <UnorderedList>
              <ListItem>
                Think of simplified, basic versions of the problem and solve
                them.
              </ListItem>
              <ListItem>
                Think of different, related problems. Solve those.
              </ListItem>
              <ListItem>Experiment. Try out different approaches.</ListItem>
              <ListItem>
                If you're really struck, just take a break. Go and do something
                else. Avoid thinking about the problem during this time.
              </ListItem>
            </UnorderedList>
          </>
        }
      />
    ),
  },
];

const refactorPrompts = [
  "How can you make it easier to read and understand?",
  "How can you improve the performance?",
  "What are alternative approaches to solving the problem?",
];

const refactorRoutes = [
  {
    render: () => (
      <ProblemSolvingWorkflowStep
        message="You solved it. Good work! Now, let's refactor it and make it even better!"
        editor={{ showEditor: false }}
      />
    ),
  },

  ...refactorPrompts.map((prompt) => ({
    render: () => <ProblemSolvingWorkflowStep message={prompt} />,
  })),
  {
    render: () => (
      <ProblemSolvingWorkflowStep
        message="Find solutions by other people. Compare them to your solution."
        editor={{ showEditor: false }}
      />
    ),
  },
];

export const problemSolvingRoutes = [
  { component: ProblemSolvingStart },
  ...understandRoutes,
  ...exampleRoutes,
  ...breakdownRoutes,
  ...codeRoutes,
  ...refactorRoutes,
  { component: ProblemSolvingFinish },
];
