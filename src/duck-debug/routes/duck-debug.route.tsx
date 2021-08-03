import { Route } from "react-router-dom";

import { DuckDebugSetup } from "duck-debug/steps/duck-debug-setup.component";
import { DuckDebugStep } from "duck-debug/steps/duck-debug-step.component";

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

export const DUCK_DEBUG_SETUP_PATH = "/duck-debug/setup";
export const DUCK_DEBUG_PROG_PATH = "/duck-debug/prog";
export const DUCK_DEBUG_REGULAR_PATH = "/duck-debug/regular";

export const duckDebugRoutes = [
  <Route path={DUCK_DEBUG_SETUP_PATH} component={DuckDebugSetup} />,
  ...regularPrompts.map((prompt, index) => (
    <Route
      key={`${DUCK_DEBUG_REGULAR_PATH}/${index + 1}`}
      path={`${DUCK_DEBUG_REGULAR_PATH}/${index + 1}`}
      render={() => <DuckDebugStep message={prompt} />}
    />
  )),
  ...progPrompts.map((prompt, index) => (
    <Route
      key={`${DUCK_DEBUG_PROG_PATH}/${index + 1}`}
      path={`${DUCK_DEBUG_PROG_PATH}/${index + 1}`}
      render={() => <DuckDebugStep message={prompt} />}
    />
  )),
];
