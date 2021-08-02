import { Box, Fade, useColorModeValue } from "@chakra-ui/react";

import { theme } from "theme";
export interface IProps {
  children: React.ReactNode;
}
export function Message(props: IProps) {
  const styles = {
    background: useColorModeValue("gray.100", "gray.700"),
    borderColor: useColorModeValue("gray.300", "gray.600"),
  };

  return (
    <Fade in>
      <Box
        border="1px solid"
        borderColor={styles.borderColor}
        background={styles.background}
        mb={theme.spacing.nextButtonMarginTop}
        maxW="full"
        rounded="lg"
        shadow="md"
        p={10}
        fontSize="3xl"
      >
        {props.children}
      </Box>
    </Fade>
  );
}
