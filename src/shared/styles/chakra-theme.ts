import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle } from "./components/button-style";

import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { globalStyles } from "./foundations/global-styles";

export const chakraTheme = extendTheme({
  components: {
    Button: ButtonStyle,
  },
  colors,
  fonts,
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: globalStyles,
  },
});
