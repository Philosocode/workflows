import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "shared/redux/store";
import { resetState } from "features/practice-questions/redux/practice-questions.slice";
import {
  selectTotalPracticeTime,
  selectTotalPracticeCount,
  selectPracticeMode,
} from "../redux/practice-questions.selectors";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { FaClock, FaHashtag } from "react-icons/fa";

export function PracticeQuestionsNavbar() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const practiceMode = useAppSelector(selectPracticeMode);
  const totalTime = useAppSelector(selectTotalPracticeTime);
  const totalCount = useAppSelector(selectTotalPracticeCount);

  function handleReset() {
    dispatch(resetState());
    history.push("/practice-questions/1");
  }

  return (
    <AppNavbar
      exitUrl="/"
      handleReset={handleReset}
      blockCounter={{
        count: practiceMode === "numQuestions" ? totalCount : totalTime,
        icon: practiceMode === "numQuestions" ? FaHashtag : FaClock,
      }}
    />
  );
}
