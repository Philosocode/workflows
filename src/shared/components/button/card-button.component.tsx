import { IconType } from "react-icons";
import { Button, ButtonProps, Icon, useColorModeValue } from "@chakra-ui/react";

import { theme } from "shared/styles/theme";

export interface CardButtonProps extends ButtonProps {
  color?: "green" | "gray";
  icon?: IconType;
}
export function CardButton({
  children,
  color,
  icon,
  ...rest
}: CardButtonProps) {
  const styles: { [key: string]: ButtonProps } = {
    shared: {
      d: "flex",
      alignItems: "center",
      fontSize: { base: "sm", md: "md" },
      p: { base: 6, md: 10 },
      position: "relative",
      shadow: "sm",
      variant: "unstyled",
      w: "full",
    },
    green: {
      bg: useColorModeValue("green.500", "green.200"),
      textColor: useColorModeValue("gray.50", "gray.800"),
      _hover: {
        bg: useColorModeValue("green.600", "green.300"),
      },
    },
    gray: {
      bg: useColorModeValue("gray.100", "gray.700"),
      textColor: useColorModeValue("gray.800", "gray.100"),
      _hover: {
        bg: useColorModeValue("gray.200", "gray.600"),
      },
    },
  };

  const buttonColor = color ?? "gray";

  return (
    <Button
      sx={theme.typography.condensed}
      {...styles["shared"]}
      {...styles[buttonColor]}
      _disabled={{
        opacity: "0.4",
        cursor: "not-allowed",
        _hover: {
          bg: styles[buttonColor].bg,
        },
      }}
      {...rest}
    >
      {icon && <Icon mr={3} boxSize={{ base: 4, md: 5 }} as={icon} />}
      {children}
    </Button>
  );
}
