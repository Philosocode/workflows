import { ThemeOverride } from "@chakra-ui/react";

export const theme: ThemeOverride = {
  animations: {
    transition: (property: string) => `${property} 300ms ease-in-out`,
  },
  spacing: {
    messageBoxSpacing: { base: 5, md: 7 },
    nextButtonMarginTop: 10,
  },
  typography: {
    condensed: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: "bold",
    },
  },
};
