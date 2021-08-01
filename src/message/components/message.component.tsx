import { Box, useColorModeValue } from "@chakra-ui/react";

import { theme } from "theme";
export interface IProps {
  children: React.ReactNode;
}
export function Message(props: IProps) {
  const styles = {
    background: useColorModeValue("white", "gray.700"),
    borderColor: useColorModeValue("gray.200", "gray.600"),
  };

  return (
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
  );
}
