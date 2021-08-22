import { combineReducers } from "redux";

import { consumeReducer } from "features/consume/redux/consume.slice";
import { noteReducer } from "features/notes/logic/note.slice";
import { modalReducer } from "shared/components/modal/redux/modal.slice";
import { practiceQuestionsReducer } from "features/practice-questions/redux/practice-questions.slice";

export const rootReducer = combineReducers({
  consume: consumeReducer,
  modal: modalReducer,
  note: noteReducer,
  practiceQuestions: practiceQuestionsReducer,
});
