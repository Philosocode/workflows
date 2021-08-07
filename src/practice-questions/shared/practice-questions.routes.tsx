import { PracticeQuestionsSetup } from "practice-questions/components/practice-questions-setup.component";
import { Redirect } from "react-router-dom";

export const practiceQuestionsRoutes = [
  { component: PracticeQuestionsSetup },
  {
    path: "/practice-questions",
    render: () => <Redirect to="/practice-questions/1" />,
  },
];
