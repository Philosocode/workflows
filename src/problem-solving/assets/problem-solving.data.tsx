import { ProblemSolvingWorkflowStep } from "problem-solving/components/problem-solving-workflow-step.component";

type TMode = "Understand" | "Examples" | "Breakdown" | "Code" | "Refactor";

const understandRoutes = [
  {
    render: () => (
      <ProblemSolvingWorkflowStep message="Restate the problem in your own words." />
    ),
  },
];

const understandPrompts = [
  ,
  "What's unknown? What are you trying to find or figure out?",
  "What do you know so far?",
  "What are the inputs?",
  "What are the outputs? What should be returned?",
  "Are there any conditions or requirements you need to keep in mind?",
];

const examplePrompts = [
  "Come up with simple, concrete examples",
  "Come up with more complex examples",
  "Have you done a similar problem in the past? If so, is there anything you can reuse?",
  "What edge cases do you need to keep in mind?",
];

const breakdownPrompts = [
  "Breakdown the problem into main steps. Break down each main step into atomic tasks (simple, easy-to-understand and implement)",
];

const codePrompts = [
  "Start with the easy, low-hanging fruit.",
  "Experiment. Try out different things.",
  "Stuck? Take a break and do something else. Don't think about the problem for a bit.",
];

const refactorPrompts = [
  "Can you make it easier to read and understand?",
  "How can you improve the performance?",
  "What are alternative approaches to solving the problem?",
  "Check out solutions by other people.",
];

export const problemSolvingMessages = [];
