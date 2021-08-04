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

export const duckDebugRoutes = [
  <Route path={`${DUCK_DEBUG_BASE_PATH}/1`} component={DuckDebugSetup} />,
  ...regularPrompts.map((prompt, index) => (
    <Route
      key={`${DUCK_DEBUG_BASE_PATH}/${index + 1}/regular`}
      path={`${DUCK_DEBUG_BASE_PATH}/${index + 1}/regular`}
      render={() => (
        <DuckDebugWorkflowStep
          message={prompt}
          editor={{ showEditor: index < regularPrompts.length }}
        />
      )}
    />
  )),
  <Route
    path={`${DUCK_DEBUG_BASE_PATH}/${regularPrompts.length + 1}/regular`}
    component={DuckDebugFinish}
  />,

  ...progPrompts.map((prompt, index) => (
    <Route
      key={`${DUCK_DEBUG_BASE_PATH}/${index + 1}/prog`}
      path={`${DUCK_DEBUG_BASE_PATH}/${index + 1}/prog`}
      render={() => (
        <DuckDebugWorkflowStep
          message={prompt}
          editor={{ showEditor: index < progPrompts.length }}
        />
      )}
    />
  )),

  <Route
    path={`${DUCK_DEBUG_BASE_PATH}/${progPrompts.length + 1}/prog`}
    component={DuckDebugFinish}
  />,
];
