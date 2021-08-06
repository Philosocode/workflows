import { Redirect, Route, Switch } from "react-router-dom";

import { studyRoutes } from "consume/routes/consume.routes";
import { useAppSelector } from "shared/redux/store";
import { selectCurrentStep } from "step/step.slice";

import { CurrentStep } from "step/current-step.component";
import { StudyFooter } from "consume/components/study-footer.component";

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
      <StudyFooter />
    </>
  );
}
