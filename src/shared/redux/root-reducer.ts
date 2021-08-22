import { combineReducers } from "redux";

import { consumeReducer } from "features/consume/redux/consume.slice";
import { noteReducer } from "features/notes/logic/note.slice";
import { practiceQuestionsReducer } from "features/practice-questions/redux/practice-questions.slice";

export const rootReducer = combineReducers({
  consume: consumeReducer,
  note: noteReducer,
  practiceQuestions: practiceQuestionsReducer,
});
