import { extendTheme } from "@chakra-ui/react";

import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { globalStyles } from "./foundations/global-styles";

import { buttonStyle } from "./components/button-style";
import { formLabelStyle } from "./components/form-label-style";

export const chakraTheme = extendTheme({
  components: {
    Button: buttonStyle,
    FormLabel: formLabelStyle,
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
