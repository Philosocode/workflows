import { Route, Switch, Redirect } from "react-router-dom";

import { consumeRoutes } from "consume/routes/consume.routes";
import { ConsumePage } from "consume/pages/consume.page";

export function RootRouter() {
  return (
    <>
      <Route path="/consume/:pageNumber" component={ConsumePage} />
      <Switch>
        {consumeRoutes.map((route) => route)}
        <Route path="/consume" render={() => <Redirect to="/consume/1" />} />
      </Switch>
    </>
  );
}
