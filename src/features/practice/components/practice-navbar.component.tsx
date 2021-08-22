import { useHistory } from "react-router-dom";
import { FaClock, FaHashtag } from "react-icons/fa";

import { AppNavbar } from "shared/components/navbar/app-navbar.component";
import { usePracticeStore } from "../logic/practice.store";
import {
  selectTotalPracticeCount,
  selectTotalPracticeTime,
} from "../logic/practice.selectors";

export function PracticeQuestionsNavbar() {
  const history = useHistory();
  const { practiceMode, reset: resetPractice } = usePracticeStore();
  const totalCount = usePracticeStore(selectTotalPracticeCount);
  const totalTime = usePracticeStore(selectTotalPracticeTime);

  function handleReset() {
    resetPractice();
    history.push("/practice/1");
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
