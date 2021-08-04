import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "consume/routes/consume.routes";
import { ConsumePage } from "consume/pages/consume.page";
import { duckDebugRoutes } from "duck-debug/routes/duck-debug.route";
import { HomePage } from "shared/pages/home.page";
import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";

const _pageRoutes = [
  { path: "/consume", component: ConsumePage },
  { path: "/duck-debug", component: DuckDebugNavbar },
];

const pageRoutes = _pageRoutes.map((route) => (
  <Route path={`${route.path}/:currentStep`} component={route.component} />
));

export function RootRouter() {
  return (
    <>
      {pageRoutes.map((route) => route)}

      <Switch>
        <Route path="/" exact component={HomePage} />

        {consumeRoutes.map((route) => route)}
        <Route path="/consume" render={() => <Redirect to="/consume/1" />} />

        {duckDebugRoutes.map((route) => route)}
        <Route
          path="/duck-debug"
          render={() => <Redirect to="/duck-debug/1" />}
        />

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}
