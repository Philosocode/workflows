import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "features/consume/routes/consume.routes";
import { duckDebugRoutes } from "features/duck-debug/routes/duck-debug.routes";
import { preStudyComponents } from "features/pre-study/routes/pre-study.routes";
import { problemSolvingRoutes } from "features/problem-solving/assets/problem-solving.data";
import { practiceQuestionsRoutes } from "features/practice-questions/shared/practice-questions.routes";

import { ConsumeNavbar } from "features/consume/components/consume-navbar.component";
import { CurrentStep } from "features/location/current-step.component";
import { HomePage } from "shared/pages/home.page";
import { DuckDebugNavbar } from "features/duck-debug/components/duck-debug-navbar.component";
import { PreStudyNavbar } from "features/pre-study/components/pre-study-navbar.component";
import { ProblemSolvingNavbar } from "features/problem-solving/components/problem-solving-navbar.component";
import { PracticeQuestionsNavbar } from "features/practice-questions/components/practice-questions-navbar.component";
import { GetUnstuck } from "features/get-unstuck/steps/get-unstuck.component";
import { GetUnstuckNavbar } from "features/get-unstuck/components/get-unstuck-navbar.component";

const navbarRoutes = [
  { path: "/consume/:currentStep", component: ConsumeNavbar },
  { path: "/get-unstuck", component: GetUnstuckNavbar },
  { path: "/duck-debug/:currentStep", component: DuckDebugNavbar },
  { path: "/pre-study/:currentStep", component: PreStudyNavbar },
  { path: "/problem-solving/:currentStep", component: ProblemSolvingNavbar },
  {
    path: "/practice-questions/:currentStep",
    component: PracticeQuestionsNavbar,
  },
];

export function RootRouter() {
  return (
    <>
      <Route path="*/:currentStep" component={CurrentStep} />

      {navbarRoutes.map((route) => (
        <Route path={route.path} component={route.component} key={route.path} />
      ))}

      <Switch>
        <Route path="/" exact component={HomePage} />

        {preStudyComponents.map((component, index) => (
          <Route
            key={`/pre-study/${index + 1}`}
            path={`/pre-study/${index + 1}`}
            component={component}
          />
        ))}

        <Route
          path="/pre-study"
          render={() => <Redirect to="/pre-study/1" />}
        />

        {consumeRoutes.map((route, index) => (
          <Route
            key={`/consume/${index + 1}`}
            path={`/consume/${index + 1}`}
            {...route}
          />
        ))}

        {practiceQuestionsRoutes.map((route, index) => (
          <Route
            key={`/practice-questions/${index + 1}`}
            path={`/practice-questions/${index + 1}`}
            {...route}
          />
        ))}

        <Route
          key={"/get-unstuck"}
          path={"/get-unstuck"}
          component={GetUnstuck}
        />

        {duckDebugRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}

        {problemSolvingRoutes.map((route, index) => (
          <Route
            key={`/problem-solving/${index + 1}`}
            path={`/problem-solving/${index + 1}`}
            {...route}
          />
        ))}

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}
