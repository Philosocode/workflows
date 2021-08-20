import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { globalStyles } from "./foundations/global-styles";

export const chakraTheme = extendTheme({
  colors,
  fonts,
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: globalStyles,
  },
});
