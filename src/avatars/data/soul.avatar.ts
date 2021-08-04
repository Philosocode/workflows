import { IAvatarConfig } from "avatars/shared/avatar.type";

import soulImage from "../assets/soul.png";

export const soul: IAvatarConfig = {
  bg: {
    light: "gray.50",
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
  name: "Professor Soul",
  imageSrc: soulImage,
  fontFamily: "Open Sans, Helvetica, sans-serif",
};
