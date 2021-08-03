import { IAvatarConfig } from "avatars/shared/avatar.type";

import quackersImage from "../assets/quackers.png";

export const quackers: IAvatarConfig = {
  bg: {
    light: "yellow.100",
    dark: "yellow.600",
  },
  borderColor: {
    light: "yellow.300",
    dark: "yellow.400",
  },
  titleColor: {
    light: "yellow.800",
    dark: "yellow.100",
  },
  textColor: {
    light: "yellow.800",
    dark: "yellow.100",
  },
  name: "Mr. Quackers",
  imageSrc: quackersImage,
  fontFamily: "Comfortaa, Helvetica, sans-serif",
};
