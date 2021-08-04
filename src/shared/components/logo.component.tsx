import { Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { theme } from "shared/styles/theme";

export function Logo() {
  const styles = {
    bg: useColorModeValue("gray.100", "gray.600"),
    hoverBg: useColorModeValue("green.500", "green.200"),
    textColor: useColorModeValue("gray.700", "gray.50"),
    hoverTextColor: useColorModeValue("gray.50", "gray.700"),
  };

  const { transition } = theme.animations;

  return (
    <Link to="/">
      <Text
        bg={styles.bg}
        textColor={styles.textColor}
        px={3}
        py={1}
        fontSize="2xl"
        rounded="lg"
        fontWeight="bold"
        transition={`${transition("border-radius")}, ${transition(
          "background",
        )}, ${transition("color")}`}
        _hover={{
          bg: styles.hoverBg,
          rounded: "50%",
          textColor: styles.hoverTextColor,
        }}
      >
        W
      </Text>
    </Link>
  );
}
