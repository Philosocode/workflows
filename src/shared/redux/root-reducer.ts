import { combineReducers } from "redux";

import { consumeReducer } from "consume/redux/consume.slice";
import { hookReducer } from "hook/redux/hook.slice";
import { modalReducer } from "modal/redux/modal.slice";
import { practiceQuestionsReducer } from "practice-questions/redux/practice-questions.slice";
import { stepReducer } from "step/step.slice";

export const rootReducer = combineReducers({
  consume: consumeReducer,
  hook: hookReducer,
  modal: modalReducer,
  practiceQuestions: practiceQuestionsReducer,
  step: stepReducer,
});
