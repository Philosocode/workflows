import { IconType } from "react-icons";
import { Button, ButtonProps, Icon, useColorModeValue } from "@chakra-ui/react";

export interface IProps extends ButtonProps {
  color?: "green" | "gray";
  icon?: IconType;
}
export function CardButton({ children, color, icon, ...rest }: IProps) {
  const styles: { [key: string]: ButtonProps } = {
    shared: {
      border: "1px solid",
      d: "flex",
      alignItems: "center",
      fontSize: { base: "lg", md: "xl" },
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

  const buttonColor = color ?? "green";

  return (
    <Button
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
      {icon && <Icon mr={2} as={icon} />} {children}
    </Button>
  );
}
