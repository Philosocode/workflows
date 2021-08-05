import { Route } from "react-router-dom";

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
  <Route path={`${DUCK_DEBUG_BASE_PATH}/setup`} component={DuckDebugSetup} />,

  ...regularPrompts.map((prompt, index) => (
    <Route
      key={`${regularUrl}/${index + 1}`}
      path={`${regularUrl}/${index + 1}`}
      render={() => (
        <DuckDebugWorkflowStep
          message={prompt}
          editor={{ showEditor: index < regularPrompts.length }}
          nextUrl={`${regularUrl}/${index + 2}`}
        />
      )}
    />
  )),

  <Route
    path={`${regularUrl}/${regularPrompts.length + 1}`}
    component={DuckDebugFinish}
  />,

  ...progPrompts.map((prompt, index) => (
    <Route
      key={`${progUrl}/${index + 1}`}
      path={`${progUrl}/${index + 1}`}
      render={() => (
        <DuckDebugWorkflowStep
          message={prompt}
          editor={{ showEditor: index < progPrompts.length }}
          nextUrl={`${progUrl}/${index + 2}`}
        />
      )}
    />
  )),

  <Route
    path={`${progUrl}/${progPrompts.length + 1}`}
    component={DuckDebugFinish}
  />,
];
