import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "consume/routes/consume.routes";
import { duckDebugRoutes } from "duck-debug/routes/duck-debug.routes";
import { ConsumeNavbar } from "consume/components/consume-navbar.component";
import { HomePage } from "shared/pages/home.page";
import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";

const navbarRoutes = [
  { path: "/consume/:currentStep", component: ConsumeNavbar },
  { path: "/duck-debug", component: DuckDebugNavbar },
];

export function RootRouter() {
  return (
    <>
      {navbarRoutes.map((route) => (
        <Route path={route.path} component={route.component} key={route.path} />
      ))}

      <Switch>
        <Route path="/" exact component={HomePage} />

        {consumeRoutes.map((route, index) => (
          <Route
            key={`/consume/${index}`}
            path={route.path ?? `/consume/${index}`}
            {...route}
          />
        ))}

        {duckDebugRoutes.map((route, index) => (
          <Route key={route.path} {...route} />
        ))}

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}
