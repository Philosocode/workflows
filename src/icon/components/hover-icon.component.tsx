import { Icon, IconProps } from "@chakra-ui/icons";
import { IconType } from "react-icons";

import { theme } from "theme";

interface IProps extends IconProps {
  as: IconType;
}
export function HoverIcon(props: IProps) {
  return (
    <Icon
      boxSize={7}
      cursor="pointer"
      _hover={{ color: "green.500" }}
      transition={theme.animations.transition("color")}
      {...props}
      as={props.as}
    />
  );
}
