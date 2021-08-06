import { IAvatarConfig } from "avatar/shared/avatar.type";

import quackersImage from "../assets/quackers.png";

export const quackers: IAvatarConfig = {
  bg: {
    light: "yellow.100",
    dark: "yellow.700",
  },
  borderColor: {
    light: "yellow.300",
    dark: "yellow.500",
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
