import { combineReducers } from "redux";

import { noteReducer } from "features/notes/logic/note.slice";

export const rootReducer = combineReducers({
  note: noteReducer,
});
