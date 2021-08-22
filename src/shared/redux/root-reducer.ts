import { combineReducers } from "redux";

import { noteReducer } from "features/notes/logic/note.slice";
import { practiceQuestionsReducer } from "features/practice-questions/redux/practice-questions.slice";

export const rootReducer = combineReducers({
  note: noteReducer,
  practiceQuestions: practiceQuestionsReducer,
});
