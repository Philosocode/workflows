import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "consume/routes/consume.routes";
import { ConsumePage } from "consume/pages/consume.page";

export function RootRouter() {
  return (
    <>
      <Route path="/consume/:currentStep" component={ConsumePage} />
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/consume/1" />} />
        {consumeRoutes.map((route) => route)}
        <Route path="/consume" render={() => <Redirect to="/consume/1" />} />
      </Switch>
    </>
  );
}
