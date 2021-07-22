import React from "react";
import { Route, Switch } from "react-router-dom";

import { ConsumePage } from "consume/pages/consume.page";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={ConsumePage} />
      </Switch>
    </div>
  );
};

export default App;
