import { Box, Heading, VStack } from "@chakra-ui/react";
import { FaSeedling } from "react-icons/fa";
import { GiPlasticDuck } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.routes";
import { Message } from "message/components/message.component";
import { Messages } from "message/components/messages.component";
import { AppNavbar } from "navbar/components/app-navbar.component";
import { ToggleThemeButton } from "navbar/components/toggle-theme-button.component";

export function HomePage() {
  return (
    <>
      <AppNavbar rightSlot={<ToggleThemeButton />} />
      <HomeMessage />
      <VStack spacing={{ base: 10, md: 12 }} alignItems="start">
        <Box w="full">
          <Heading size="lg">Study</Heading>
          <CardButtonGrid mt={5}>
            <Link to="/pre-study/1">
              <CardButton color="gray" icon={FaSeedling}>
                Pre-Study
              </CardButton>
            </Link>
            <Link to="/consume/1">
              <CardButton color="gray" icon={IoMdSchool}>
                Read / Watch
              </CardButton>
            </Link>
          </CardButtonGrid>
        </Box>

        <Box w="full">
          <Heading size="lg">Help</Heading>
          <CardButtonGrid mt={5}>
            <Link
              to={{
                pathname: `${DUCK_DEBUG_BASE_PATH}/1`,
                state: { from: "/" },
              }}
            >
              <CardButton color="gray" icon={GiPlasticDuck}>
                Rubber Duck Debug
              </CardButton>
            </Link>
          </CardButtonGrid>
        </Box>
      </VStack>
    </>
  );
}

function HomeMessage() {
  return (
    <Box w="full">
      <Message>
        <Messages>
          <Box>
            Welcome to Workflows! This is a website dedicated to helping you
            learn and practice better.
          </Box>
          <Box>To get started, choose an option below.</Box>
        </Messages>
      </Message>
    </Box>
  );
}
