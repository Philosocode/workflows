import { Redirect } from "react-router-dom";

import { PracticeQuestionsSetup } from "features/practice/components/practice-setup.component";
import { PracticeQuestionsStudy } from "features/practice/components/practice-study.component";

export const practiceQuestionsRoutes = [
  { component: PracticeQuestionsSetup },
  { component: PracticeQuestionsStudy },
  {
    path: "/practice",
    render: () => <Redirect to="/practice/1" />,
  },
];
