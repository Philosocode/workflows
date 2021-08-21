import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";

export function Button(props: ButtonProps) {
  return (
    <ButtonChakra
      sx={theme.typography.condensed}
      colorScheme="gray"
      fontSize={theme.typography.fontSize.button}
      minW="5rem"
      {...props}
    />
  );
}
