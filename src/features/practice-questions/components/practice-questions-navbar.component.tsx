import { useHistory } from "react-router-dom";

import { useAppDispatch } from "shared/redux/store";
import { resetState } from "features/practice-questions/redux/practice-questions.slice";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function PracticeQuestionsNavbar() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  function handleReset() {
    dispatch(resetState());
    history.push("/practice-questions/1");
  }

  return <AppNavbar exitUrl="/" handleReset={handleReset} />;
}
