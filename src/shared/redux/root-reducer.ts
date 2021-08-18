import { combineReducers } from "redux";

import { consumeReducer } from "consume/redux/consume.slice";
import { noteReducer } from "features/notes/logic/note.slice";
import { modalReducer } from "modal/redux/modal.slice";
import { practiceQuestionsReducer } from "practice-questions/redux/practice-questions.slice";
import { stepReducer } from "step/step.slice";

export const rootReducer = combineReducers({
  consume: consumeReducer,
  modal: modalReducer,
  note: noteReducer,
  practiceQuestions: practiceQuestionsReducer,
  step: stepReducer,
});
