import { Redirect, Route, Switch } from "react-router-dom";

import { studyRoutes } from "features/consume/routes/consume.routes";
import { useLocationStore } from "features/location/location.store";

import { CurrentStep } from "features/location/current-step.component";

export function Study() {
  const { currentStep } = useLocationStore();
  const basePath = `/consume/${currentStep}`;

  return (
    <>
      <Route path="*/:currentStep/*" component={CurrentStep} />
      <Switch>
        {studyRoutes.map((route) => (
          <Route
            {...route}
            key={route.path}
            path={`${basePath}/${route.path}`}
          />
        ))}
        <Route
          path={basePath}
          render={() => <Redirect to={`${basePath}/menu`} />}
        />
      </Switch>
    </>
  );
}
