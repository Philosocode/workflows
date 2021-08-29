import React from "react";
import { Box } from "@chakra-ui/react";

import { Footer } from "shared/components/nav/footer.component";
import { ModalRoot } from "shared/components/modal/components/modal-root.component";
import { RootRouter } from "shared/routes/root-router.component";
import { ScrollToTop } from "shared/components/scroll-to-top/scroll-to-top.component";

const App: React.FC = () => {
  return (
    <Box
      as="main"
      maxW="800px"
      mx="auto"
      w="95vw"
      minHeight="95vh"
      position="relative"
      pb={{ base: "12", md: "16" }}
    >
      <ScrollToTop />
      <RootRouter />
      <ModalRoot />
      <Footer />
    </Box>
  );
};

export default App;
