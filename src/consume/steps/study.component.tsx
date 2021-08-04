import { Redirect, Route, Switch } from "react-router-dom";

import { StudyFooter } from "consume/components/study-footer.component";
import {
  CONSUME_PAGE_NUMBERS,
  studyRoutes,
} from "consume/routes/consume.routes";

export function Study() {
  const basePath = `/consume/${CONSUME_PAGE_NUMBERS.STUDY}`;

  return (
    <>
      <Switch>
        {studyRoutes.map((route) => route)}
        <Route
          path={basePath}
          render={() => <Redirect to={`${basePath}/menu`} />}
        />
      </Switch>
      <StudyFooter />
    </>
  );
}
