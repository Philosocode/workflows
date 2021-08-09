import { Box, Heading, VStack } from "@chakra-ui/react";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaSearch, FaSeedling } from "react-icons/fa";
import { GiPlasticDuck } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";

import { CardButtonGrid } from "shared/components/button/card-button-grid.component";
import { CardButton } from "shared/components/button/card-button.component";
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
          <CardButtonGrid
            mt={5}
            buttons={[
              { text: "Pre-Study", to: "/pre-study/1", icon: FaSeedling },
              { text: "Read / Watch", to: "/consume/1", icon: IoMdSchool },
              {
                text: "Practice",
                to: "/practice-questions/1",
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
                pathname: `duck-debug/1`,
                state: { from: "/" },
              }}
            >
              <CardButton icon={GiPlasticDuck}>Duck Debug</CardButton>
            </Link>
            <Link
              to={{
                pathname: `problem-solving/1`,
                state: { from: "/" },
              }}
            >
              <CardButton icon={FaSearch}>Problem Solve</CardButton>
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
