import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { ConsumePage } from "consume/pages/consume.page";

const App: React.FC = () => {
  return (
    <Box as="main" maxW="1000px" mx="auto" my={10}>
      <Switch>
        <Route path="/" component={ConsumePage} />
      </Switch>
    </Box>
  );
};

export default App;
