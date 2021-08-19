import { Redirect } from "react-router-dom";

import { PracticeQuestionsSetup } from "features/practice-questions/components/practice-questions-setup.component";
import { PracticeQuestionsStudy } from "features/practice-questions/components/practice-questions-study.component";

export const practiceQuestionsRoutes = [
  { component: PracticeQuestionsSetup },
  { component: PracticeQuestionsStudy },
  {
    path: "/practice-questions",
    render: () => <Redirect to="/practice-questions/1" />,
  },
];
