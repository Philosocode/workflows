import { IAvatarConfig } from "avatar/shared/avatar.type";

import soulImage from "../assets/soul.png";

export const soul: IAvatarConfig = {
  bg: {
    light: "gray.100",
    dark: "gray.700",
  },
  borderColor: {
    light: "gray.300",
    dark: "gray.600",
  },
  textColor: {
    light: "gray.800",
    dark: "gray.100",
  },
  titleColor: {
    light: "gray.500",
    dark: "gray.400",
  },
  name: "The Professor",
  imageSrc: soulImage,
  fontFamily: "Open Sans, Helvetica, sans-serif",
};
