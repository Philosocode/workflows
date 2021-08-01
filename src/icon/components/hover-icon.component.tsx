import { Icon, IconProps } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { theme } from "theme";

interface IProps extends IconProps {
  as: IconType;
}
export function HoverIcon(props: IProps) {
  const hoverColor = useColorModeValue("green.500", "green.300");

  return (
    <Icon
      boxSize={7}
      cursor="pointer"
      _hover={{ color: hoverColor }}
      transition={theme.animations.transition("color")}
      {...props}
      as={props.as}
    />
  );
}
