import React from "react";
import { Route, Switch } from "react-router-dom";

import { ConsumePage } from "consume/pages/consume.page";

const App: React.FC = () => {
  return (
    <main className="max-w-screen-lg my-10 mx-auto">
      <Switch>
        <Route path="/" component={ConsumePage} />
      </Switch>
    </main>
  );
};

export default App;
