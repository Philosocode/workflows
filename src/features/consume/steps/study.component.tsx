import { Redirect, Route, Switch } from "react-router-dom";

import { studyRoutes } from "features/consume/routes/consume.routes";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "features/step/step.slice";

import { CurrentStep } from "features/step/current-step.component";

export function Study() {
  const currentStep = useAppSelector(selectCurrentStep);
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
