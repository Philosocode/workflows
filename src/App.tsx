import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { ConsumePage } from "consume/pages/consume.page";
import { ModalRoot } from "modal/components/modal-root.component";

const App: React.FC = () => {
  return (
    <Box
      as="main"
      maxW="800px"
      mx="auto"
      w="95vw"
      pb={{ base: "12", md: "16" }}
    >
      <Switch>
        <Route path="/" component={ConsumePage} />
      </Switch>
      <ModalRoot />
    </Box>
  );
};

export default App;
