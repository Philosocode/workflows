import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "consume/routes/consume.routes";
import { duckDebugRoutes } from "duck-debug/routes/duck-debug.routes";
import { preStudyRoutes } from "pre-study/routes/pre-study.routes";

import { ConsumeNavbar } from "consume/components/consume-navbar.component";
import { CurrentStep } from "step/current-step.component";
import { HomePage } from "shared/pages/home.page";
import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";
import { PreStudyNavbar } from "pre-study/components/pre-study-navbar.component";

const navbarRoutes = [
  { path: "/consume/:currentStep", component: ConsumeNavbar },
  { path: "/duck-debug/:currentStep", component: DuckDebugNavbar },
  { path: "/pre-study/:currentStep", component: PreStudyNavbar },
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

        {consumeRoutes.map((route, index) => (
          <Route
            key={`/consume/${index + 1}`}
            path={`/consume/${index + 1}`}
            {...route}
          />
        ))}

        {duckDebugRoutes.map((route, index) => (
          <Route key={route.path} {...route} />
        ))}

        {preStudyRoutes.map((route, index) => (
          <Route
            key={`/pre-study/${index + 1}`}
            path={`/pre-study/${index + 1}`}
            {...route}
          />
        ))}

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}
