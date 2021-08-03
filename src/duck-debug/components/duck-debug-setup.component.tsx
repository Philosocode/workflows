import { Box, Center, Image } from "@chakra-ui/react";
import { Message } from "message/components/message.component";

import duckImage from "consume/assets/timothy-dykes-LhqLdDPcSV8-unsplash.png";

export function DuckDebugSetup() {
  return (
    <>
      <Message>
        <Box>
          Hi, I'm Quackers the rubber duck. I'm here to help you get un-stuck!
        </Box>
        <Box>Just one question. Do you need help with programming?</Box>
      </Message>
      <Center mb={10}>
        <Image
          src={duckImage}
          alt="Rubber Duck"
          maxW={{ base: "40", md: "full" }}
        />
      </Center>
    </>
  );
}
