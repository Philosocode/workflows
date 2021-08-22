import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "react-mde/lib/styles/css/react-mde-all.css";
import { chakraTheme } from "shared/styles/chakra-theme";

// fonts
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/700.css";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={chakraTheme}>
        <ColorModeScript
          initialColorMode={chakraTheme.config.initialColorMode}
        />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
