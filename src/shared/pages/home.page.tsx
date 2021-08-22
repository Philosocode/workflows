import { Box, Heading, SlideFade, VStack } from "@chakra-ui/react";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
import { Message } from "shared/components/message/message.component";
import { Messages } from "shared/components/message/messages.component";
import { AppNavbar } from "shared/components/navbar/app-navbar.component";

export function HomePage() {
  return (
    <>
      <AppNavbar />
      <SlideFade in offsetY={30}>
        <HomeMessage />
        <VStack spacing={{ base: 10, md: 12 }} alignItems="start">
          <Box w="full">
            <Heading size="lg">Study</Heading>
            <CardButtonGrid
              mt={5}
              buttons={[
                { text: "Pre-Study", to: "/pre-study/1", icon: FaSeedling },
                { text: "Read / Watch", to: "/consume/1", icon: IoMdSchool },
                {
                  text: "Practice",
                  to: "/practice/1",
                  icon: BsQuestionSquareFill,
                },
              ]}
            />
          </Box>

          <Box w="full">
            <Heading size="lg">Help</Heading>
            <CardButtonGrid mt={5}>
              <Link
                to={{
                  pathname: `get-unstuck/1`,
                  state: { from: "/" },
                }}
              >
                <CardButton icon={BiHelpCircle}>Get Unstuck</CardButton>
              </Link>
            </CardButtonGrid>
          </Box>
        </VStack>
      </SlideFade>
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
