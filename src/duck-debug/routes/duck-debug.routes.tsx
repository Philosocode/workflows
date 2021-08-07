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
  { component: DuckDebugSetup, path: `${DUCK_DEBUG_BASE_PATH}/1` },

  ...regularPrompts.map((prompt, index) => ({
    path: `${regularUrl}/${index + 2}`,
    render: () => (
      <DuckDebugWorkflowStep
        message={prompt}
        editor={{ showEditor: index < regularPrompts.length }}
        nextUrl={`${regularUrl}/${index + 3}`}
      />
    ),
  })),
  {
    component: DuckDebugFinish,
    path: `${regularUrl}/${regularPrompts.length + 2}`,
  },

  ...progPrompts.map((prompt, index) => ({
    path: `${progUrl}/${index + 2}`,
    render: () => (
      <DuckDebugWorkflowStep
        message={prompt}
        editor={{ showEditor: index < progPrompts.length }}
        nextUrl={`${progUrl}/${index + 3}`}
      />
    ),
  })),
  { component: DuckDebugFinish, path: `${progUrl}/${progPrompts.length + 2}` },

  // catch-all
  {
    path: "/duck-debug",
    render: () => <Redirect to="/duck-debug/1" />,
  },
];

export const DUCK_DEBUG_NUM_PROG_ROUTES = progPrompts.length + 2;
export const DUCK_DEBUG_NUM_REGULAR_ROUTES = regularPrompts.length + 2;
