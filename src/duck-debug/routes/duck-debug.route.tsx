import { Route } from "react-router-dom";

import { DuckDebugSetup } from "duck-debug/components/duck-debug-setup.component";

const _duckDebugRoutes = [{ component: DuckDebugSetup }];

export const duckDebugRoutes = _duckDebugRoutes.map((route, index) => (
  <Route
    key={`/duck-debug/${index + 1}`}
    path={`/duck-debug/${index + 1}`}
    {...route}
  />
));
