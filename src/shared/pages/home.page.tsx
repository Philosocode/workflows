import { Box, Heading, VStack } from "@chakra-ui/react";
import { IoMdSchool } from "react-icons/io";
import { GiPlasticDuck } from "react-icons/gi";
import { Link } from "react-router-dom";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { DUCK_DEBUG_BASE_PATH } from "duck-debug/routes/duck-debug.route";
import { Message } from "message/components/message.component";
import { Messages } from "message/components/messages.component";

export function HomePage() {
  return (
    <>
      <HomeMessage />
      <VStack spacing={{ base: 10, md: 12 }} alignItems="start">
        <Box>
          <Heading size="lg">Study</Heading>
          <CardButtonGrid mt={5}>
            <Link to="/consume/1">
              <CardButton color="gray" icon={IoMdSchool}>
                Read / Watch
              </CardButton>
            </Link>
          </CardButtonGrid>
        </Box>

        <Box>
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
    <Box mt={10} w="full">
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
