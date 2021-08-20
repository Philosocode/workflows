import { combineReducers } from "redux";

import { consumeReducer } from "features/consume/redux/consume.slice";
import { gameReducer } from "features/game/game.slice";
import { noteReducer } from "features/notes/logic/note.slice";
import { modalReducer } from "shared/components/modal/redux/modal.slice";
import { practiceQuestionsReducer } from "features/practice-questions/redux/practice-questions.slice";
import { stepReducer } from "features/step/step.slice";

export const rootReducer = combineReducers({
  consume: consumeReducer,
  game: gameReducer,
  modal: modalReducer,
  note: noteReducer,
  practiceQuestions: practiceQuestionsReducer,
  step: stepReducer,
});
