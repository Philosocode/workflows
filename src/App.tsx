import React from "react";
import { Box } from "@chakra-ui/react";

import { ModalRoot } from "modal/components/modal-root.component";
import { RootRouter } from "shared/routes/root-router.component";
import { ScrollToTop } from "shared/components/scroll-to-top.component";

const App: React.FC = () => {
  return (
    <Box
      as="main"
      maxW="800px"
      mx="auto"
      w="95vw"
      pb={{ base: "12", md: "16" }}
    >
      <ScrollToTop />
      <RootRouter />
      <ModalRoot />
    </Box>
  );
};

export default App;
