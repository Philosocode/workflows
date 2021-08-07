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
      border: "1px solid",
      d: "flex",
      alignItems: "center",
      fontSize: { base: "md", md: "lg" },
      p: { base: 7, md: 10 },
      position: "relative",
      shadow: "sm",
      variant: "unstyled",
      w: "full",
    },
    green: {
      borderColor: useColorModeValue("gray.300", "gray.600"),
      bg: useColorModeValue("green.500", "green.200"),
      textColor: useColorModeValue("gray.50", "gray.800"),
      _hover: {
        bg: useColorModeValue("green.600", "green.300"),
      },
    },
    gray: {
      borderColor: useColorModeValue("gray.200", "gray.600"),
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
      sx={{ ...theme.typography.condensed }}
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
      {icon && <Icon mr={3} as={icon} />} {children}
    </Button>
  );
}
