import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "consume/routes/consume.routes";
import { duckDebugRoutes } from "duck-debug/routes/duck-debug.routes";
import { ConsumeNavbar } from "consume/components/consume-navbar.component";
import { HomePage } from "shared/pages/home.page";
import { DuckDebugNavbar } from "duck-debug/components/duck-debug-navbar.component";

const navbarRoutes = [
  { path: "/consume", component: ConsumeNavbar },
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
