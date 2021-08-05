import { Redirect } from "react-router-dom";

import { DuckDebugSetup } from "duck-debug/steps/duck-debug-setup.component";
import { DuckDebugWorkflowStep } from "duck-debug/components/duck-debug-workflow-step.component";
import { DuckDebugFinish } from "duck-debug/steps/duck-debug-finish.component";

const regularPrompts = [
  "Okay, cool! What problem are you struggling with?",
  "What should be happening? What are you expecting?",
  "What's actually happening?",
  "What have you tried so far?",
];

const progPrompts = [
  "Okay, cool! What problem are you struggling with?",
  "What's the code supposed to do?",
  "What's actually happening?",
  "What have you tried so far?",
  "Explain your code in detail, line-by-line.",
];

export const DUCK_DEBUG_BASE_PATH = "/duck-debug";
const regularUrl = `${DUCK_DEBUG_BASE_PATH}/regular`;
const progUrl = `${DUCK_DEBUG_BASE_PATH}/prog`;

export const duckDebugRoutes = [
  { component: DuckDebugSetup, path: "duck-debug/setup" },

  ...regularPrompts.map((prompt, index) => ({
    path: `${regularUrl}/${index + 1}`,
    render: () => (
      <DuckDebugWorkflowStep
        message={prompt}
        editor={{ showEditor: index < regularPrompts.length }}
        nextUrl={`${regularUrl}/${index + 2}`}
      />
    ),
  })),
  {
    component: DuckDebugFinish,
    path: `${regularUrl}/${regularPrompts.length + 1}`,
  },

  ...progPrompts.map((prompt, index) => ({
    path: `${progUrl}/${index + 1}`,
    render: () => (
      <DuckDebugWorkflowStep
        message={prompt}
        editor={{ showEditor: index < progPrompts.length }}
        nextUrl={`${progUrl}/${index + 2}`}
      />
    ),
  })),
  { component: DuckDebugFinish, path: `${progUrl}/${progPrompts.length + 1}` },

  // catch-all
  {
    component: DuckDebugSetup,
    path: "/duck-debug",
    render: () => <Redirect to="/duck-debug/setup" />,
  },
];
